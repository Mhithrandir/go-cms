import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormControlType } from 'src/app/classes/form-control-type';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {

  @Input() controlName!: string;
  @Input() frmGroup!: FormGroup;
  @Input() controlType: FormControlType = FormControlType.Input;
  @Input() Min: number = 0;
  @Input() Max!: number;
  @Input() label!: string;
  @Input() descField!: string;
  @Input() dataList!: Array<any>;
  @Input() dataList2!: Array<any>;
  @Input() size: number = 1;
  @Input() enabled!: boolean;
  @Output() visiblePassChanged = new EventEmitter();
  @Output() onChanged = new EventEmitter();
  @Output() onFileChanged = new EventEmitter();
  public passVisible!: boolean;
  public passType: string = "password";
  public imageSrc: any;
  public userFile!: File;

  public editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '100px',
    maxHeight: '300px',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter description here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    // uploadUrl: 'v1/image',
    // uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      // ['bold', 'italic'],
      // ['fontSize']
      [
        'insertImage',
        'insertVideo',
        'strikeThrough',
        'subscript',
        'superscript',
        'justifyLeft',
        'justifyCenter',
        'justifyFull',
        'font',
        'fontSize',
        'justifyRight',
        'toggleEditorMode'
       ]
    ]
  };
  
  constructor() { }

  ngOnInit(): void {
  }
  SetPasswordVisible() {
    this.passVisible = !this.passVisible;
    if(this.passVisible){
      this.passType = "text";
    }
    else{
      this.passType = "password";
    }
    this.visiblePassChanged.emit(this.passVisible);
  }
  OnChanged($event: any) {
    this.onChanged.emit(this.controlName);
  }
  onFileChange(event: any) {
    this.userFile = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
    this.frmGroup.controls['image'].setValue(this.userFile.name);
    this.onFileChanged.emit(this.userFile);
  }
}
