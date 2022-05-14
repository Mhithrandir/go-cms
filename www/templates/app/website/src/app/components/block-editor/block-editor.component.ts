import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogType } from 'src/app/classes/dialog-type';
import { EditorElement } from 'src/app/classes/editor-element';
import { Route } from 'src/app/classes/route';

@Component({
  selector: 'app-block-editor',
  templateUrl: './block-editor.component.html',
  styleUrls: ['./block-editor.component.scss']
})
export class BlockEditorComponent implements OnInit {

  public frmGroup!: FormGroup;
  public hideMenu: boolean = true;
  public preview: boolean = false;
  public selectedElement!: EditorElement;
  public dialogType: DialogType = DialogType.Null;
  @Input() element!: EditorElement;
  @Input() routes!: Array<Route>;
  @Output() ondeleting = new EventEmitter();
  @Output() onselecting = new EventEmitter();
  @Output() onsaved = new EventEmitter();
  @Output() onmousenterchild = new EventEmitter();
  @Output() onmousleavechild = new EventEmitter();
  @Output() onsavepage = new EventEmitter();
  @Output() onmove = new EventEmitter();
  public userFile!: File;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    if(this.element == null) {
      //main element
      this.element = new EditorElement();
      this.element.Childrens = new Array<any>();
      this.element.Type = "main";
      this.element.VerticalOrientation = true;
    }
    this.frmGroup = this.createForm();
  }
  createForm(): FormGroup {
    let vett: { [key: string]: FormControl; } = {};
    if((this.selectedElement != null) && (this.selectedElement.Type != 'main')) {
      // vett['id'] = [ this.selectedElement.IDElement ];
      vett['id'] = new FormControl(this.selectedElement.IDElement);
      vett['class'] = new FormControl(this.selectedElement.IsClass);
      vett['text'] = new FormControl(this.selectedElement.Content);
      vett['image'] = new FormControl(this.selectedElement.ImageName);
    }
    if((this.selectedElement != null) && (this.selectedElement.Type == 'main')) {
      vett['name'] = new FormControl(this.selectedElement.IDElement, Validators.compose([Validators.required]));
      vett['route'] = new FormControl(this.selectedElement.IDRoute);
    }
    return this.fb.group(vett);
  }
  ShowMenu() {
    this.hideMenu = !this.hideMenu;
  }
  Add(type: string) {
    let children = new EditorElement();
    children.Childrens = new Array<any>();
    if(type == "column") {
      type = "container";
    }
    children.Type = type;
    switch(type) {
      case 'text': children.Content = "Example text"; break;
      case 'button': children.Content = "Example button"; break;
      case 'title': children.Content = "Example title"; break;
      case 'image': children.Content = "http://via.placeholder.com/100x50"; break;
    }
    if(type == 'columns') {
      for(let i = 0; i < 3; i++) {
        let c = new EditorElement();
        c.Childrens = new Array<any>();
        c.Type = 'container';
        c.VerticalOrientation = true;
        c.ShowTitle = false;
        children.Childrens.push(c);
      }
    }
    children.IDParent = this.element.ID;
    this.element.Childrens.push(children);
  }
  Delete() {
    this.ondeleting.emit(this.element);
  }
  DeleteChildren(c: EditorElement) {
    let index = this.element.Childrens.indexOf(c);
    this.element.Childrens.splice(index, 1);
  }
  Select() {
    if(this.element.Type != 'main') {
      this.onselecting.emit(this.element);
    }
    else {
      this.SelectChildren(this.element);
    }
  }
  SelectChildren(c: EditorElement) {
    if(this.element.Type == 'main') {
      this.selectedElement = c;
      this.ClearSelected(this.element);
      // this.element.ClearSelected();
      c.Selected = true;
      this.frmGroup = this.createForm();
    }
    else {
      this.onselecting.emit(c);
    }
  }
  onSubmit() {
    if((this.selectedElement != null) && (this.selectedElement.Type != 'main')) {
      this.selectedElement.IDElement = this.frmGroup.controls["id"].value;
      this.selectedElement.IsClass = this.frmGroup.controls["class"].value;
      if(this.selectedElement.Type != 'image') {
        this.selectedElement.Content = this.frmGroup.controls["text"].value;
      }
      this.onsaved.emit(this.selectedElement);
    }
    if((this.selectedElement != null) && (this.selectedElement.Type == 'main')) {
      this.element.IDElement = this.frmGroup.controls["name"].value;
      this.element.IDRoute = parseInt(this.frmGroup.controls["route"].value);
      this.onsavepage.emit(this.element);
    }
  }
  SavedChildren($event: EditorElement) {
    let index = this.element.Childrens.indexOf($event);
    this.element.Childrens[index] = $event;
  }
  ShowTitle($event: MouseEvent, element: EditorElement) {
    element.ShowTitle = ($event.type == "mouseenter");
    if(element.ShowTitle) {
      this.onmousenterchild.emit(false);
    }
    else {
      this.onmousleavechild.emit(true);
    }
  }
  MouseChild(element: boolean) {
    this.element.ShowTitle = element;
  }
  onFileChanged($event: File) {
    this.userFile = $event;
    var reader  = new FileReader();
    reader.readAsDataURL(this.userFile);
    reader.onloadend = (() => {
      this.selectedElement.Content = reader.result;
      this.selectedElement.ImageName = this.userFile.name;
    });
  }
  Move(up: boolean) {
    this.onmove.emit({ element: this.element, up: up });
  }
  MoveChildren($event: any) {
    let index = this.element.Childrens.indexOf($event.element);
    this.element.Childrens.splice(index, 1);
    if($event.up) {
      this.element.Childrens.splice(index - 1, 0, $event.element);
    }
    else {
      this.element.Childrens.splice(index +1, 0, $event.element);
    }
  }
  ClearSelected(element: EditorElement) {
    element.Selected = false;
    if(element.Childrens == null) return;
    element.Childrens.forEach((c: EditorElement) => {
      this.ClearSelected(c);
    });
  }
}
