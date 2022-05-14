import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/classes/user';
import { UserType } from 'src/app/classes/user-type';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  public frmGroup!: FormGroup;
  @Input() selectedUsertype!: User;
  @Input() error!: string;
  @Input() userTypes!: Array<UserType>;
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
      vett['usertype'] = new FormControl(this.selectedUsertype.UserType.ID, Validators.compose([Validators.required]));
    }
    return this.fb.group(vett);
  }

  onSubmit() {
    this.selectedUsertype.IDUserType = parseInt(this.frmGroup.controls['usertype'].value);
    this.saved.emit(this.selectedUsertype);
  }

}
