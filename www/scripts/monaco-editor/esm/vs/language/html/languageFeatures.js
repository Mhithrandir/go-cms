/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as lsTypes from './_deps/vscode-languageserver-types/main.js';
import { languages, Uri, Range } from './fillers/monaco-editor-core.js';
// --- completion ------
function fromPosition(position) {
    if (!position) {
        return void 0;
    }
    return { character: position.column - 1, line: position.lineNumber - 1 };
}
function fromRange(range) {
    if (!range) {
        return void 0;
    }
    return {
        start: fromPosition(range.getStartPosition()),
        end: fromPosition(range.getEndPosition())
    };
}
function toRange(range) {
    if (!range) {
        return void 0;
    }
    return new Range(range.start.line + 1, range.start.character + 1, range.end.line + 1, range.end.character + 1);
}
function isInsertReplaceEdit(edit) {
    return (typeof edit.insert !== 'undefined' &&
        typeof edit.replace !== 'undefined');
}
function toCompletionItemKind(kind) {
    var mItemKind = languages.CompletionItemKind;
    switch (kind) {
        case lsTypes.CompletionItemKind.Text:
            return mItemKind.Text;
        case lsTypes.CompletionItemKind.Method:
            return mItemKind.Method;
        case lsTypes.CompletionItemKind.Function:
            return mItemKind.Function;
        case lsTypes.CompletionItemKind.Constructor:
            return mItemKind.Constructor;
        case lsTypes.CompletionItemKind.Field:
            return mItemKind.Field;
        case lsTypes.CompletionItemKind.Variable:
            return mItemKind.Variable;
        case lsTypes.CompletionItemKind.Class:
            return mItemKind.Class;
        case lsTypes.CompletionItemKind.Interface:
            return mItemKind.Interface;
        case lsTypes.CompletionItemKind.Module:
            return mItemKind.Module;
        case lsTypes.CompletionItemKind.Property:
            return mItemKind.Property;
        case lsTypes.CompletionItemKind.Unit:
            return mItemKind.Unit;
        case lsTypes.CompletionItemKind.Value:
            return mItemKind.Value;
        case lsTypes.CompletionItemKind.Enum:
            return mItemKind.Enum;
        case lsTypes.CompletionItemKind.Keyword:
            return mItemKind.Keyword;
        case lsTypes.CompletionItemKind.Snippet:
            return mItemKind.Snippet;
        case lsTypes.CompletionItemKind.Color:
            return mItemKind.Color;
        case lsTypes.CompletionItemKind.File:
            return mItemKind.File;
        case lsTypes.CompletionItemKind.Reference:
            return mItemKind.Reference;
    }
    return mItemKind.Property;
}
function fromCompletionItemKind(kind) {
    var mItemKind = languages.CompletionItemKind;
    switch (kind) {
        case mItemKind.Text:
            return lsTypes.CompletionItemKind.Text;
        case mItemKind.Method:
            return lsTypes.CompletionItemKind.Method;
        case mItemKind.Function:
            return lsTypes.CompletionItemKind.Function;
        case mItemKind.Constructor:
            return lsTypes.CompletionItemKind.Constructor;
        case mItemKind.Field:
            return lsTypes.CompletionItemKind.Field;
        case mItemKind.Variable:
            return lsTypes.CompletionItemKind.Variable;
        case mItemKind.Class:
            return lsTypes.CompletionItemKind.Class;
        case mItemKind.Interface:
            return lsTypes.CompletionItemKind.Interface;
        case mItemKind.Module:
            return lsTypes.CompletionItemKind.Module;
        case mItemKind.Property:
            return lsTypes.CompletionItemKind.Property;
        case mItemKind.Unit:
            return lsTypes.CompletionItemKind.Unit;
        case mItemKind.Value:
            return lsTypes.CompletionItemKind.Value;
        case mItemKind.Enum:
            return lsTypes.CompletionItemKind.Enum;
        case mItemKind.Keyword:
            return lsTypes.CompletionItemKind.Keyword;
        case mItemKind.Snippet:
            return lsTypes.CompletionItemKind.Snippet;
        case mItemKind.Color:
            return lsTypes.CompletionItemKind.Color;
        case mItemKind.File:
            return lsTypes.CompletionItemKind.File;
        case mItemKind.Reference:
            return lsTypes.CompletionItemKind.Reference;
    }
    return lsTypes.CompletionItemKind.Property;
}
function toTextEdit(textEdit) {
    if (!textEdit) {
        return void 0;
    }
    return {
        range: toRange(textEdit.range),
        text: textEdit.newText
    };
}
function toCommand(c) {
    return c && c.command === 'editor.action.triggerSuggest'
        ? { id: c.command, title: c.title, arguments: c.arguments }
        : undefined;
}
var CompletionAdapter = /** @class */ (function () {
    function CompletionAdapter(_worker) {
        this._worker = _worker;
    }
    Object.defineProperty(CompletionAdapter.prototype, "triggerCharacters", {
        get: function () {
            return ['.', ':', '<', '"', '=', '/'];
        },
        enumerable: false,
        configurable: true
    });
    CompletionAdapter.prototype.provideCompletionItems = function (model, position, context, token) {
        var resource = model.uri;
        return this._worker(resource)
            .then(function (worker) {
            return worker.doComplete(resource.toString(), fromPosition(position));
        })
            .then(function (info) {
            if (!info) {
                return;
            }
            var wordInfo = model.getWordUntilPosition(position);
            var wordRange = new Range(position.lineNumber, wordInfo.startColumn, position.lineNumber, wordInfo.endColumn);
            var items = info.items.map(function (entry) {
                var item = {
                    label: entry.label,
                    insertText: entry.insertText || entry.label,
                    sortText: entry.sortText,
                    filterText: entry.filterText,
                    documentation: entry.documentation,
                    command: toCommand(entry.command),
                    detail: entry.detail,
                    range: wordRange,
                    kind: toCompletionItemKind(entry.kind)
                };
                if (entry.textEdit) {
                    if (isInsertReplaceEdit(entry.textEdit)) {
                        item.range = {
                            insert: toRange(entry.textEdit.insert),
                            replace: toRange(entry.textEdit.replace)
                        };
                    }
                    else {
                        item.range = toRange(entry.textEdit.range);
                    }
                    item.insertText = entry.textEdit.newText;
                }
                if (entry.additionalTextEdits) {
                    item.additionalTextEdits = entry.additionalTextEdits.map(toTextEdit);
                }
                if (entry.insertTextFormat === lsTypes.InsertTextFormat.Snippet) {
                    item.insertTextRules = languages.CompletionItemInsertTextRule.InsertAsSnippet;
                }
                return item;
            });
            return {
                isIncomplete: info.isIncomplete,
                suggestions: items
            };
        });
    };
    return CompletionAdapter;
}());
export { CompletionAdapter };
// --- hover ------
function isMarkupContent(thing) {
    return (thing && typeof thing === 'object' && typeof thing.kind === 'string');
}
function toMarkdownString(entry) {
    if (typeof entry === 'string') {
        return {
            value: entry
        };
    }
    if (isMarkupContent(entry)) {
        if (entry.kind === 'plaintext') {
            return {
                value: entry.value.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&')
            };
        }
        return {
            value: entry.value
        };
    }
    return { value: '```' + entry.language + '\n' + entry.value + '\n```\n' };
}
function toMarkedStringArray(contents) {
    if (!contents) {
        return void 0;
    }
    if (Array.isArray(contents)) {
        return contents.map(toMarkdownString);
    }
    return [toMarkdownString(contents)];
}
var HoverAdapter = /** @class */ (function () {
    function HoverAdapter(_worker) {
        this._worker = _worker;
    }
    HoverAdapter.prototype.provideHover = function (model, position, token) {
        var resource = model.uri;
        return this._worker(resource)
            .then(function (worker) {
            return worker.doHover(resource.toString(), fromPosition(position));
        })
            .then(function (info) {
            if (!info) {
                return;
            }
            return {
                range: toRange(info.range),
                contents: toMarkedStringArray(info.contents)
            };
        });
    };
    return HoverAdapter;
}());
export { HoverAdapter };
// --- document highlights ------
function toHighlighKind(kind) {
    var mKind = languages.DocumentHighlightKind;
    switch (kind) {
        case lsTypes.DocumentHighlightKind.Read:
            return mKind.Read;
        case lsTypes.DocumentHighlightKind.Write:
            return mKind.Write;
        case lsTypes.DocumentHighlightKind.Text:
            return mKind.Text;
    }
    return mKind.Text;
}
var DocumentHighlightAdapter = /** @class */ (function () {
    function DocumentHighlightAdapter(_worker) {
        this._worker = _worker;
    }
    DocumentHighlightAdapter.prototype.provideDocumentHighlights = function (model, position, token) {
        var resource = model.uri;
        return this._worker(resource)
            .then(function (worker) { return worker.findDocumentHighlights(resource.toString(), fromPosition(position)); })
            .then(function (items) {
            if (!items) {
                return;
            }
            return items.map(function (item) { return ({
                range: toRange(item.range),
                kind: toHighlighKind(item.kind)
            }); });
        });
    };
    return DocumentHighlightAdapter;
}());
export { DocumentHighlightAdapter };
// --- document symbols ------
function toSymbolKind(kind) {
    var mKind = languages.SymbolKind;
    switch (kind) {
        case lsTypes.SymbolKind.File:
            return mKind.Array;
        case lsTypes.SymbolKind.Module:
            return mKind.Module;
        case lsTypes.SymbolKind.Namespace:
            return mKind.Namespace;
        case lsTypes.SymbolKind.Package:
            return mKind.Package;
        case lsTypes.SymbolKind.Class:
            return mKind.Class;
        case lsTypes.SymbolKind.Method:
            return mKind.Method;
        case lsTypes.SymbolKind.Property:
            return mKind.Property;
        case lsTypes.SymbolKind.Field:
            return mKind.Field;
        case lsTypes.SymbolKind.Constructor:
            return mKind.Constructor;
        case lsTypes.SymbolKind.Enum:
            return mKind.Enum;
        case lsTypes.SymbolKind.Interface:
            return mKind.Interface;
        case lsTypes.SymbolKind.Function:
            return mKind.Function;
        case lsTypes.SymbolKind.Variable:
            return mKind.Variable;
        case lsTypes.SymbolKind.Constant:
            return mKind.Constant;
        case lsTypes.SymbolKind.String:
            return mKind.String;
        case lsTypes.SymbolKind.Number:
            return mKind.Number;
        case lsTypes.SymbolKind.Boolean:
            return mKind.Boolean;
        case lsTypes.SymbolKind.Array:
            return mKind.Array;
    }
    return mKind.Function;
}
var DocumentSymbolAdapter = /** @class */ (function () {
    function DocumentSymbolAdapter(_worker) {
        this._worker = _worker;
    }
    DocumentSymbolAdapter.prototype.provideDocumentSymbols = function (model, token) {
        var resource = model.uri;
        return this._worker(resource)
            .then(function (worker) { return worker.findDocumentSymbols(resource.toString()); })
            .then(function (items) {
            if (!items) {
                return;
            }
            return items.map(function (item) { return ({
                name: item.name,
                detail: '',
                containerName: item.containerName,
                kind: toSymbolKind(item.kind),
                tags: [],
                range: toRange(item.location.range),
                selectionRange: toRange(item.location.range)
            }); });
        });
    };
    return DocumentSymbolAdapter;
}());
export { DocumentSymbolAdapter };
var DocumentLinkAdapter = /** @class */ (function () {
    function DocumentLinkAdapter(_worker) {
        this._worker = _worker;
    }
    DocumentLinkAdapter.prototype.provideLinks = function (model, token) {
        var resource = model.uri;
        return this._worker(resource)
            .then(function (worker) { return worker.findDocumentLinks(resource.toString()); })
            .then(function (items) {
            if (!items) {
                return;
            }
            return {
                links: items.map(function (item) { return ({
                    range: toRange(item.range),
                    url: item.target
                }); })
            };
        });
    };
    return DocumentLinkAdapter;
}());
export { DocumentLinkAdapter };
function fromFormattingOptions(options) {
    return {
        tabSize: options.tabSize,
        insertSpaces: options.insertSpaces
    };
}
var DocumentFormattingEditProvider = /** @class */ (function () {
    function DocumentFormattingEditProvider(_worker) {
        this._worker = _worker;
    }
    DocumentFormattingEditProvider.prototype.provideDocumentFormattingEdits = function (model, options, token) {
        var resource = model.uri;
        return this._worker(resource).then(function (worker) {
            return worker
                .format(resource.toString(), null, fromFormattingOptions(options))
                .then(function (edits) {
                if (!edits || edits.length === 0) {
                    return;
                }
                return edits.map(toTextEdit);
            });
        });
    };
    return DocumentFormattingEditProvider;
}());
export { DocumentFormattingEditProvider };
var DocumentRangeFormattingEditProvider = /** @class */ (function () {
    function DocumentRangeFormattingEditProvider(_worker) {
        this._worker = _worker;
    }
    DocumentRangeFormattingEditProvider.prototype.provideDocumentRangeFormattingEdits = function (model, range, options, token) {
        var resource = model.uri;
        return this._worker(resource).then(function (worker) {
            return worker
                .format(resource.toString(), fromRange(range), fromFormattingOptions(options))
                .then(function (edits) {
                if (!edits || edits.length === 0) {
                    return;
                }
                return edits.map(toTextEdit);
            });
        });
    };
    return DocumentRangeFormattingEditProvider;
}());
export { DocumentRangeFormattingEditProvider };
var RenameAdapter = /** @class */ (function () {
    function RenameAdapter(_worker) {
        this._worker = _worker;
    }
    RenameAdapter.prototype.provideRenameEdits = function (model, position, newName, token) {
        var resource = model.uri;
        return this._worker(resource)
            .then(function (worker) {
            return worker.doRename(resource.toString(), fromPosition(position), newName);
        })
            .then(function (edit) {
            return toWorkspaceEdit(edit);
        });
    };
    return RenameAdapter;
}());
export { RenameAdapter };
function toWorkspaceEdit(edit) {
    if (!edit || !edit.changes) {
        return void 0;
    }
    var resourceEdits = [];
    for (var uri in edit.changes) {
        var _uri = Uri.parse(uri);
        for (var _i = 0, _a = edit.changes[uri]; _i < _a.length; _i++) {
            var e = _a[_i];
            resourceEdits.push({
                resource: _uri,
                edit: {
                    range: toRange(e.range),
                    text: e.newText
                }
            });
        }
    }
    return {
        edits: resourceEdits
    };
}
var FoldingRangeAdapter = /** @class */ (function () {
    function FoldingRangeAdapter(_worker) {
        this._worker = _worker;
    }
    FoldingRangeAdapter.prototype.provideFoldingRanges = function (model, context, token) {
        var resource = model.uri;
        return this._worker(resource)
            .then(function (worker) { return worker.getFoldingRanges(resource.toString(), context); })
            .then(function (ranges) {
            if (!ranges) {
                return;
            }
            return ranges.map(function (range) {
                var result = {
                    start: range.startLine + 1,
                    end: range.endLine + 1
                };
                if (typeof range.kind !== 'undefined') {
                    result.kind = toFoldingRangeKind(range.kind);
                }
                return result;
            });
        });
    };
    return FoldingRangeAdapter;
}());
export { FoldingRangeAdapter };
function toFoldingRangeKind(kind) {
    switch (kind) {
        case lsTypes.FoldingRangeKind.Comment:
            return languages.FoldingRangeKind.Comment;
        case lsTypes.FoldingRangeKind.Imports:
            return languages.FoldingRangeKind.Imports;
        case lsTypes.FoldingRangeKind.Region:
            return languages.FoldingRangeKind.Region;
    }
}
var SelectionRangeAdapter = /** @class */ (function () {
    function SelectionRangeAdapter(_worker) {
        this._worker = _worker;
    }
    SelectionRangeAdapter.prototype.provideSelectionRanges = function (model, positions, token) {
        var resource = model.uri;
        return this._worker(resource)
            .then(function (worker) { return worker.getSelectionRanges(resource.toString(), positions.map(fromPosition)); })
            .then(function (selectionRanges) {
            if (!selectionRanges) {
                return;
            }
            return selectionRanges.map(function (selectionRange) {
                var result = [];
                while (selectionRange) {
                    result.push({ range: toRange(selectionRange.range) });
                    selectionRange = selectionRange.parent;
                }
                return result;
            });
        });
    };
    return SelectionRangeAdapter;
}());
export { SelectionRangeAdapter };
