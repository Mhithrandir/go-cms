import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SheetElement } from 'src/app/classes/sheet-element';
import { SheetElementType } from 'src/app/classes/sheet-element-type';

@Component({
  selector: 'app-edit-sheet-element',
  templateUrl: './edit-sheet-element.component.html',
  styleUrls: ['./edit-sheet-element.component.scss']
})
export class EditSheetElementComponent implements OnInit {

  public frmGroup!: FormGroup;
  @Input() selectedSheetElement!: SheetElement;
  @Input() elementTypes!: Array<SheetElementType>;
  @Input() elements!: any;
  @Input() selectedElements!: any;
  public selectedRecordParent1!: SheetElement;
  public selectedRecordParent2!: SheetElement;
  @Input() error!: string;
  public userFile!: File;
  @Output() saved = new EventEmitter();
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.frmGroup = this.createForm();
  }
  createForm(): FormGroup {
    let vett: { [key: string]: FormControl; } = {};
    if(this.selectedSheetElement == null) {
      this.selectedSheetElement = new SheetElement();
      this.selectedSheetElement.Name = "";
      this.selectedSheetElement.Min = 0;
      this.selectedSheetElement.Max = 0;
      this.selectedSheetElement.Cost = 0;
      this.selectedSheetElement.IDType = 0;
      this.selectedSheetElement.SheetElementType = new SheetElementType();
      this.selectedSheetElement.SheetElementType.Name = "";
      this.selectedSheetElement.ID = 0;
      this.selectedSheetElement.ReferenceSheetElement = new SheetElement();
      this.selectedSheetElement.ReferenceSheetElement.ID = -1;
    }
    vett['name'] = new FormControl(this.selectedSheetElement.Name, Validators.compose([Validators.required]));
    vett['description'] = new FormControl(this.selectedSheetElement.Description, Validators.compose([Validators.required]));
    vett['min'] = new FormControl(this.selectedSheetElement.Min, Validators.compose([Validators.required, Validators.min(0)]));
    vett['max'] = new FormControl(this.selectedSheetElement.Max, Validators.compose([Validators.required, Validators.min(0)]));
    vett['cost'] = new FormControl(this.selectedSheetElement.Cost, Validators.compose([Validators.required, Validators.min(0)]));
    vett['type'] = new FormControl(this.selectedSheetElement.IDType, Validators.compose([Validators.required]));
    vett['image'] = new FormControl(this.selectedSheetElement.Icon, Validators.compose([Validators.required]));
    vett['referenceSheetElement'] = new FormControl(this.selectedSheetElement.ReferenceSheetElement.ID, Validators.compose([Validators.required]));
    vett['parent1'] = new FormControl(null);
    vett['parent2'] = new FormControl(null);
    return this.fb.group(vett);
  }
  onSubmit() {
    let formData: FormData = new FormData();
    if(this.userFile != null) {
      formData.append('myFile', this.userFile, this.userFile.name);
      formData.append('HasImage', (true).toString());
    }
    formData.append('Name', this.frmGroup.controls['name'].value);
    formData.append('Description', this.frmGroup.controls['description'].value);
    formData.append('Min', this.frmGroup.controls['min'].value);
    formData.append('Max', this.frmGroup.controls['max'].value);
    formData.append('Cost', this.frmGroup.controls['cost'].value);
    formData.append('IDType', this.frmGroup.controls['type'].value);
    formData.append('ID', this.selectedSheetElement.ID.toString());
    if(this.selectedElements.IDReferenceSheetElement == null) {
      formData.append('IDReferenceSheetElement', "-1");
    }
    else {
      formData.append('IDReferenceSheetElement', this.selectedElements.IDReferenceSheetElement);
    }
    this.saved.emit(formData);
  }
  Move(left: boolean) {
    if(!left) {
      this.selectedElements[this.selectedRecordParent1.SheetElementType.Name].Rows.push(this.selectedRecordParent1);
    }
    else {
      let index = this.selectedElements[this.selectedRecordParent2.SheetElementType.Name].Rows.indexOf(this.selectedRecordParent2);
      this.selectedElements[this.selectedRecordParent2.SheetElementType.Name].Rows.splice(index, 1);
    }
  }
  onFileChanged($event: File) {
    this.userFile = $event;
  }
  Selected1(parent1: boolean) {
    if(parent1) {
      this.elementTypes.forEach((t: SheetElementType) => {
        if(this.elements[t.Name].Rows == null) return;
        this.elements[t.Name].Rows.forEach((e: SheetElement) => {
          if(e.ID == this.frmGroup.controls['parent1'].value) {
            this.selectedRecordParent1 = e;
          }
        });
      });
    }
    else {
      this.elementTypes.forEach((t: SheetElementType) => {
        if(this.selectedElements[t.Name].Rows == null) return;
        this.selectedElements[t.Name].Rows.forEach((e: SheetElement) => {
          if(e.ID == this.frmGroup.controls['parent2'].value) {
            this.selectedRecordParent2 = e;
          }
        });
      });
    }
  }
}
