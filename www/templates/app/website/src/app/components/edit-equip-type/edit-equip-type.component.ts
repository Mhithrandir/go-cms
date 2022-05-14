import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { EquipType } from 'src/app/classes/equip-type';
import { RoutePermission } from 'src/app/classes/route-permission';

@Component({
  selector: 'app-edit-equip-type',
  templateUrl: './edit-equip-type.component.html',
  styleUrls: ['./edit-equip-type.component.scss']
})
export class EditEquipTypeComponent implements OnInit {

  public frmGroup!: FormGroup;
  @Input() selectedEquipType!: EquipType;
  @Input() error!: string;
  @Output() saved = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.frmGroup = this.createForm();
  }
  createForm(): FormGroup {
    let vett: { [key: string]: FormControl; } = {};
    if(this.selectedEquipType == null) {
      this.selectedEquipType = new EquipType();
      this.selectedEquipType.Name = '';
    }
    vett['name'] = new FormControl(this.selectedEquipType.Name, Validators.compose([Validators.required]));
    return this.fb.group(vett);
  }
  onSubmit() {
    this.selectedEquipType.Name = this.frmGroup.controls['name'].value;
    this.saved.emit(this.selectedEquipType);
  }

}
