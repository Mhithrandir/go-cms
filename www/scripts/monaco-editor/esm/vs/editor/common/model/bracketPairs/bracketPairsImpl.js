/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Emitter } from '../../../../base/common/event.js';
import { Disposable, DisposableStore, MutableDisposable } from '../../../../base/common/lifecycle.js';
import { Range } from '../../core/range.js';
import { BracketInfo, BracketPairWithMinIndentationInfo } from './bracketPairs.js';
import { TextEditInfo } from './impl/beforeEditPositionMapper.js';
import { LanguageAgnosticBracketTokens } from './impl/brackets.js';
import { lengthAdd, lengthGreaterThanEqual, lengthLessThanEqual, lengthOfString, lengthsToRange, lengthZero, positionToLength, toLength } from './impl/length.js';
import { parseDocument } from './impl/parser.js';
import { DenseKeyProvider } from './impl/smallImmutableSet.js';
import { FastTokenizer, TextBufferTokenizer } from './impl/tokenizer.js';
export class BracketPairs extends Disposable {
    constructor(textModel, languageConfigurationService) {
        super();
        this.textModel = textModel;
        this.languageConfigurationService = languageConfigurationService;
        this.cache = this._register(new MutableDisposable());
        this.onDidChangeEmitter = new Emitter();
        this.onDidChange = this.onDidChangeEmitter.event;
        this.bracketsRequested = false;
        this._register(textModel.onDidChangeOptions(e => {
            this.cache.clear();
            this.updateCache();
        }));
        this._register(textModel.onDidChangeLanguage(e => {
            this.cache.clear();
            this.updateCache();
        }));
        this._register(this.languageConfigurationService.onDidChange(e => {
            var _a;
            if (!e.languageId || ((_a = this.cache.value) === null || _a === void 0 ? void 0 : _a.object.didLanguageChange(e.languageId))) {
                this.cache.clear();
                this.updateCache();
            }
        }));
    }
    get isDocumentSupported() {
        const maxSupportedDocumentLength = /* max lines */ 50000 * /* average column count */ 100;
        return this.textModel.getValueLength() <= maxSupportedDocumentLength;
    }
    updateCache() {
        if (this.bracketsRequested && this.isDocumentSupported) {
            if (!this.cache.value) {
                const store = new DisposableStore();
                this.cache.value = createDisposableRef(store.add(new ActiveBracketPairsImpl(this.textModel, (languageId) => {
                    return this.languageConfigurationService.getLanguageConfiguration(languageId);
                })), store);
                store.add(this.cache.value.object.onDidChange(e => this.onDidChangeEmitter.fire(e)));
                this.onDidChangeEmitter.fire();
            }
        }
        else {
            this.cache.clear();
            this.onDidChangeEmitter.fire();
        }
    }
    handleContentChanged(change) {
        var _a;
        (_a = this.cache.value) === null || _a === void 0 ? void 0 : _a.object.handleContentChanged(change);
    }
    /**
     * Returns all bracket pairs that intersect the given range.
     * The result is sorted by the start position.
    */
    getBracketPairsInRange(range) {
        var _a;
        this.bracketsRequested = true;
        this.updateCache();
        return ((_a = this.cache.value) === null || _a === void 0 ? void 0 : _a.object.getBracketPairsInRange(range, false)) || [];
    }
    getBracketPairsInRangeWithMinIndentation(range) {
        var _a;
        this.bracketsRequested = true;
        this.updateCache();
        return ((_a = this.cache.value) === null || _a === void 0 ? void 0 : _a.object.getBracketPairsInRange(range, true)) || [];
    }
    getBracketsInRange(range) {
        var _a;
        this.bracketsRequested = true;
        this.updateCache();
        return ((_a = this.cache.value) === null || _a === void 0 ? void 0 : _a.object.getBracketsInRange(range)) || [];
    }
}
function createDisposableRef(object, disposable) {
    return {
        object,
        dispose: () => disposable === null || disposable === void 0 ? void 0 : disposable.dispose(),
    };
}
class ActiveBracketPairsImpl extends Disposable {
    constructor(textModel, getLanguageConfiguration) {
        super();
        this.textModel = textModel;
        this.getLanguageConfiguration = getLanguageConfiguration;
        this.didChangeEmitter = new Emitter();
        this.denseKeyProvider = new DenseKeyProvider();
        this.brackets = new LanguageAgnosticBracketTokens(this.denseKeyProvider, this.getLanguageConfiguration);
        this.onDidChange = this.didChangeEmitter.event;
        this._register(textModel.onBackgroundTokenizationStateChanged(() => {
            if (textModel.backgroundTokenizationState === 2 /* Completed */) {
                const wasUndefined = this.initialAstWithoutTokens === undefined;
                // Clear the initial tree as we can use the tree with token information now.
                this.initialAstWithoutTokens = undefined;
                if (!wasUndefined) {
                    this.didChangeEmitter.fire();
                }
            }
        }));
        this._register(textModel.onDidChangeTokens(({ ranges }) => {
            const edits = ranges.map(r => new TextEditInfo(toLength(r.fromLineNumber - 1, 0), toLength(r.toLineNumber, 0), toLength(r.toLineNumber - r.fromLineNumber + 1, 0)));
            this.astWithTokens = this.parseDocumentFromTextBuffer(edits, this.astWithTokens, false);
            if (!this.initialAstWithoutTokens) {
                this.didChangeEmitter.fire();
            }
        }));
        if (textModel.backgroundTokenizationState === 0 /* Uninitialized */) {
            // There are no token information yet
            const brackets = this.brackets.getSingleLanguageBracketTokens(this.textModel.getLanguageId());
            const tokenizer = new FastTokenizer(this.textModel.getValue(), brackets);
            this.initialAstWithoutTokens = parseDocument(tokenizer, [], undefined, true);
            this.astWithTokens = this.initialAstWithoutTokens;
        }
        else if (textModel.backgroundTokenizationState === 2 /* Completed */) {
            // Skip the initial ast, as there is no flickering.
            // Directly create the tree with token information.
            this.initialAstWithoutTokens = undefined;
            this.astWithTokens = this.parseDocumentFromTextBuffer([], undefined, false);
        }
        else if (textModel.backgroundTokenizationState === 1 /* InProgress */) {
            this.initialAstWithoutTokens = this.parseDocumentFromTextBuffer([], undefined, true);
            this.astWithTokens = this.initialAstWithoutTokens;
        }
    }
    didLanguageChange(languageId) {
        return this.brackets.didLanguageChange(languageId);
    }
    handleContentChanged(change) {
        const edits = change.changes.map(c => {
            const range = Range.lift(c.range);
            return new TextEditInfo(positionToLength(range.getStartPosition()), positionToLength(range.getEndPosition()), lengthOfString(c.text));
        }).reverse();
        this.astWithTokens = this.parseDocumentFromTextBuffer(edits, this.astWithTokens, false);
        if (this.initialAstWithoutTokens) {
            this.initialAstWithoutTokens = this.parseDocumentFromTextBuffer(edits, this.initialAstWithoutTokens, false);
        }
    }
    /**
     * @pure (only if isPure = true)
    */
    parseDocumentFromTextBuffer(edits, previousAst, immutable) {
        // Is much faster if `isPure = false`.
        const isPure = false;
        const previousAstClone = isPure ? previousAst === null || previousAst === void 0 ? void 0 : previousAst.deepClone() : previousAst;
        const tokenizer = new TextBufferTokenizer(this.textModel, this.brackets);
        const result = parseDocument(tokenizer, edits, previousAstClone, immutable);
        return result;
    }
    getBracketsInRange(range) {
        const startOffset = toLength(range.startLineNumber - 1, range.startColumn - 1);
        const endOffset = toLength(range.endLineNumber - 1, range.endColumn - 1);
        const result = new Array();
        const node = this.initialAstWithoutTokens || this.astWithTokens;
        collectBrackets(node, lengthZero, node.length, startOffset, endOffset, result);
        return result;
    }
    getBracketPairsInRange(range, includeMinIndentation) {
        const result = new Array();
        const startLength = positionToLength(range.getStartPosition());
        const endLength = positionToLength(range.getEndPosition());
        const node = this.initialAstWithoutTokens || this.astWithTokens;
        const context = new CollectBracketPairsContext(result, includeMinIndentation, this.textModel);
        collectBracketPairs(node, lengthZero, node.length, startLength, endLength, context);
        return result;
    }
}
function collectBrackets(node, nodeOffsetStart, nodeOffsetEnd, startOffset, endOffset, result, level = 0) {
    if (node.kind === 1 /* Bracket */) {
        const range = lengthsToRange(nodeOffsetStart, nodeOffsetEnd);
        result.push(new BracketInfo(range, level - 1, false));
    }
    else if (node.kind === 3 /* UnexpectedClosingBracket */) {
        const range = lengthsToRange(nodeOffsetStart, nodeOffsetEnd);
        result.push(new BracketInfo(range, level - 1, true));
    }
    else if (node.kind === 4 /* List */) {
        for (const child of node.children) {
            nodeOffsetEnd = lengthAdd(nodeOffsetStart, child.length);
            if (lengthLessThanEqual(nodeOffsetStart, endOffset) && lengthGreaterThanEqual(nodeOffsetEnd, startOffset)) {
                collectBrackets(child, nodeOffsetStart, nodeOffsetEnd, startOffset, endOffset, result, level);
            }
            nodeOffsetStart = nodeOffsetEnd;
        }
    }
    else if (node.kind === 2 /* Pair */) {
        // Don't use node.children here to improve performance
        level++;
        {
            const child = node.openingBracket;
            nodeOffsetEnd = lengthAdd(nodeOffsetStart, child.length);
            if (lengthLessThanEqual(nodeOffsetStart, endOffset) && lengthGreaterThanEqual(nodeOffsetEnd, startOffset)) {
                collectBrackets(child, nodeOffsetStart, nodeOffsetEnd, startOffset, endOffset, result, level);
            }
            nodeOffsetStart = nodeOffsetEnd;
        }
        if (node.child) {
            const child = node.child;
            nodeOffsetEnd = lengthAdd(nodeOffsetStart, child.length);
            if (lengthLessThanEqual(nodeOffsetStart, endOffset) && lengthGreaterThanEqual(nodeOffsetEnd, startOffset)) {
                collectBrackets(child, nodeOffsetStart, nodeOffsetEnd, startOffset, endOffset, result, level);
            }
            nodeOffsetStart = nodeOffsetEnd;
        }
        if (node.closingBracket) {
            const child = node.closingBracket;
            nodeOffsetEnd = lengthAdd(nodeOffsetStart, child.length);
            if (lengthLessThanEqual(nodeOffsetStart, endOffset) && lengthGreaterThanEqual(nodeOffsetEnd, startOffset)) {
                collectBrackets(child, nodeOffsetStart, nodeOffsetEnd, startOffset, endOffset, result, level);
            }
            nodeOffsetStart = nodeOffsetEnd;
        }
    }
}
class CollectBracketPairsContext {
    constructor(result, includeMinIndentation, textModel) {
        this.result = result;
        this.includeMinIndentation = includeMinIndentation;
        this.textModel = textModel;
    }
}
function collectBracketPairs(node, nodeOffset, nodeOffsetEnd, startOffset, endOffset, context, level = 0) {
    var _a;
    if (node.kind === 2 /* Pair */) {
        const openingBracketEnd = lengthAdd(nodeOffset, node.openingBracket.length);
        let minIndentation = -1;
        if (context.includeMinIndentation) {
            minIndentation = node.computeMinIndentation(nodeOffset, context.textModel);
        }
        context.result.push(new BracketPairWithMinIndentationInfo(lengthsToRange(nodeOffset, nodeOffsetEnd), lengthsToRange(nodeOffset, openingBracketEnd), node.closingBracket
            ? lengthsToRange(lengthAdd(openingBracketEnd, ((_a = node.child) === null || _a === void 0 ? void 0 : _a.length) || lengthZero), nodeOffsetEnd)
            : undefined, level, minIndentation));
        level++;
    }
    let curOffset = nodeOffset;
    for (const child of node.children) {
        const childOffset = curOffset;
        curOffset = lengthAdd(curOffset, child.length);
        if (lengthLessThanEqual(childOffset, endOffset) && lengthLessThanEqual(startOffset, curOffset)) {
            collectBracketPairs(child, childOffset, curOffset, startOffset, endOffset, context, level);
        }
    }
}
