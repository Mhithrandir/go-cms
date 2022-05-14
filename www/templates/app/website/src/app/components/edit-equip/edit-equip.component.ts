import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Equip } from 'src/app/classes/equip';
import { EquipType } from 'src/app/classes/equip-type';

@Component({
  selector: 'app-edit-equip',
  templateUrl: './edit-equip.component.html',
  styleUrls: ['./edit-equip.component.scss']
})
export class EditEquipComponent implements OnInit {

  public frmGroup!: FormGroup;
  public sizes = [
    {"ID":0, "Size": "NoSize" },
    {"ID":1, "Size": "Small" },
    {"ID":2, "Size": "Medium" },
    {"ID":3, "Size": "Big" },
    {"ID":4, "Size": "Huge" },
    {"ID":5, "Size": "Small (Veichle)" },
    {"ID":6, "Size": "Medium (Veichle)" },
    {"ID":7, "Size": "Big (Veichle)" },
    {"ID":8, "Size": "Small (Ship)" },
    {"ID":9, "Size": "Medium (Ship)" },
    {"ID":10, "Size": "Big (Ship)" }
  ];
  @Input() selectedEquip!: Equip;
  @Input() equipTypes!: Array<EquipType>;
  @Input() error!: string;
  public userFile!: File;
  @Output() saved = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.frmGroup = this.createForm();
  }
  createForm(): FormGroup {
    let vett: { [key: string]: FormControl; } = {};
    if(this.selectedEquip == null) {
      this.selectedEquip = new Equip();
      this.selectedEquip.Name = '';
      this.selectedEquip.Icon = '';
      this.selectedEquip.Description = '';
      this.selectedEquip.Price = 0;
      this.selectedEquip.Size = 0;
      this.selectedEquip.Type = new EquipType();
      this.selectedEquip.Type.ID = 0;
    }
    vett['name'] = new FormControl(this.selectedEquip.Name, Validators.compose([Validators.required]));
    vett['image'] = new FormControl(this.selectedEquip.Icon);
    vett['description'] = new FormControl(this.selectedEquip.Description, Validators.compose([Validators.required]));
    vett['price'] = new FormControl(this.selectedEquip.Price, Validators.compose([Validators.required]));
    vett['size'] = new FormControl(this.selectedEquip.Size, Validators.compose([Validators.required]));
    vett['type'] = new FormControl(this.selectedEquip.Type.ID, Validators.compose([Validators.required]));
    return this.fb.group(vett);
  }
  onFileChanged($event: File) {
    this.userFile = $event;
  }
  onSubmit() {
    let formData: FormData = new FormData();
    if(this.userFile != null) {
      formData.append('myFile', this.userFile, this.userFile.name);
      formData.append('HasImage', (true).toString());
    }
    formData.append('Name', this.frmGroup.controls['name'].value);
    formData.append('Icon', this.frmGroup.controls['image'].value);
    formData.append('Description', this.frmGroup.controls['description'].value);
    formData.append('Price', this.frmGroup.controls['price'].value);
    formData.append('Type', this.frmGroup.controls['type'].value);
    this.saved.emit(formData);
  }

}
