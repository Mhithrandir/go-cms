import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements OnInit {

  @Input() language: string = 'javascript';
  @Input() contentFile: string = '';
  editorOptions = {
    theme: 'vs-dark',
    language: this.language,
    roundedSelection: true,
    automaticLayout: 'true',
    glyphMargin: true
  };

  constructor() { }

  ngOnInit(): void {
    this.editorOptions = {
      theme: 'vs-dark',
      language: this.language,
      roundedSelection: true,
      automaticLayout: 'true',
      glyphMargin: true
    };
  }
}
