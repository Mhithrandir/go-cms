import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserType } from 'src/app/classes/user-type';

@Component({
  selector: 'app-edit-user-type',
  templateUrl: './edit-user-type.component.html',
  styleUrls: ['./edit-user-type.component.scss']
})
export class EditUserTypeComponent implements OnInit {

  public frmGroup!: FormGroup;
  @Input() selectedUsertype!: string;
  @Input() error!: string;
  @Output() saved = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.frmGroup = this.createForm();
  }

  createForm(): FormGroup {
    let vett: { [key: string]: FormControl; } = {};
    if(this.selectedUsertype == null) {
      vett['usertype'] = new FormControl("", Validators.compose([Validators.required]));
    }
    else {
      vett['usertype'] = new FormControl(this.selectedUsertype, Validators.compose([Validators.required]));
    }
    return this.fb.group(vett);
  }

  onSubmit() {
    let u = new UserType();
    u.Description = this.frmGroup.controls['usertype'].value;
    this.saved.emit(u);
  }

}
