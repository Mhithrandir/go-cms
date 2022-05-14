import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SheetElement, SheetElementValue } from 'src/app/classes/sheet-element';

@Component({
  selector: 'app-edit-character-info',
  templateUrl: './edit-character-info.component.html',
  styleUrls: ['./edit-character-info.component.scss']
})
export class EditCharacterInfoComponent implements OnInit {

  @Input() scheda!: { [key: string]: any; };
  public frmGroup!: FormGroup;
  public userFile!: File;
  @Output() saved = new EventEmitter();
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.frmGroup = this.createForm();
  }
  createForm(): FormGroup {
    let vett: { [key: string]: FormControl; } = {};
    vett['name'] = new FormControl(this.scheda['Info'][this.GetSheetElementIndex('Name')].Value, Validators.compose([Validators.required]));
    vett['image'] = new FormControl(this.scheda['Info'][this.GetSheetElementIndex('Image')].Value);
    vett['prestavolto'] = new FormControl(this.scheda['Info'][this.GetSheetElementIndex('Prestavolto')].Value, Validators.compose([Validators.required]));
    vett['background'] = new FormControl(this.scheda['Info'][this.GetSheetElementIndex('Background')].Value, Validators.compose([Validators.required]));
    vett['points'] = new FormControl(this.scheda['Points'].Value, Validators.compose([Validators.min(0), Validators.max(0)]));
    return this.fb.group(vett);
  }

  onFileChanged($event: File) {
    this.userFile = $event;
    var reader  = new FileReader();
    reader.readAsDataURL(this.userFile);
    reader.onloadend = (() => {
      this.scheda['Info'][this.GetSheetElementIndex('Image')].Value = { Data: reader.result, ImageName: this.userFile.name };
    });
  }
  onSubmit() {
    let s = new SheetElement();
    this.scheda['Info'][this.GetSheetElementIndex('Name')].Value = this.frmGroup.controls['name'].value;
    this.scheda['Info'][this.GetSheetElementIndex('Prestavolto')].Value = this.frmGroup.controls['prestavolto'].value;
    this.scheda['Info'][this.GetSheetElementIndex('Background')].Value = this.frmGroup.controls['background'].value;
    this.saved.emit(this.scheda);
  }
  GetSheetElementIndex(name: string) {
    for (let i = 0; i < this.scheda['Info'].length; i++) {
      if(this.scheda['Info'][i].Element.Name == name) {
        return i;
      }
    }
    return -1
  }
}
