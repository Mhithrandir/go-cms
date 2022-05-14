import { Component, OnInit } from '@angular/core';
import { DataColumn, DataTable } from 'src/app/classes/data-table';
import { DialogType } from 'src/app/classes/dialog-type';
import { User } from 'src/app/classes/user';
import { UserType } from 'src/app/classes/user-type';
import { BaseComponent } from 'src/app/components/base/base.component';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent extends BaseComponent implements OnInit {

  public userTypes!: Array<UserType>;

  constructor(service: CommonsService) { super(service); }

  ngOnInit(): void {
    //Load the users
    this.service.Get("user", "loadusers").subscribe((result: Object) => {
      this.records = this.service.FormatResponse(result).Data;
      this.table = new DataTable();
      this.table.Columns = new Array<DataColumn>();
      this.table.Columns.push(new DataColumn("Username", "string"));
      this.table.Columns.push(new DataColumn("IsPasswordExpired", "bool", "Password expired"));
      this.table.Columns.push(new DataColumn("LastLogin", "date", "Last Login"));
      this.table.Columns.push(new DataColumn("PasswordDuration", "string", "Password duration (in days)"));
      this.table.Columns.push(new DataColumn("UserType.Description", "string", "User type"));
      this.table.EditButton = this.table.DeleteButton = true;
      this.table.Rows = this.service.FormatResponse(result).Data;
    }, (error) => {
      this.HandleError(error);
    }, () => {
      return this.records;
    });
    this.service.Get("usertype", "getusertypes").subscribe((result: Object) => {
      this.userTypes = this.service.FormatResponse(result).Data;
    }, (error) => {
      this.HandleError(error);
    }, () => {
      return this.records;
    });
  }
  Edit(user: User) {
    this.selectedRecord = user;
    this.dialogType = DialogType.Edit;
  }
  SavedDialogClick($event: User, dialogType: DialogType) {
    this.selectedRecord = $event;
    this.service.Post("user", "update", this.selectedRecord).subscribe((result: Object) => {
      let res = this.service.FormatResponse(result).Data;
      if(res) {
        this.CancelDialogClick();
        location.reload();
      }
    }, (error) => {
      this.HandleError(error);
    });
  }
}
