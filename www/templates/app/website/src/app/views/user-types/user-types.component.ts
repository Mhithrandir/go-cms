import { Component, OnInit } from '@angular/core';
import { DataTable, DataColumn } from 'src/app/classes/data-table';
import { DialogType } from 'src/app/classes/dialog-type';
import { UserType } from 'src/app/classes/user-type';
import { BaseComponent } from 'src/app/components/base/base.component';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-user-types',
  templateUrl: './user-types.component.html',
  styleUrls: ['./user-types.component.scss']
})
export class UserTypesComponent extends BaseComponent implements OnInit {

  constructor(service: CommonsService) { super(service); }

  ngOnInit(): void {
    //Load the users
    this.service.Get("usertype", "getusertypes").subscribe((result: Object) => {
      this.records = this.service.FormatResponse(result).Data;
      this.table = new DataTable();
      this.table.Columns = new Array<DataColumn>();
      this.table.Columns.push(new DataColumn("Description", "string"));
      this.table.DeleteButton = this.table.AddButton = true;
      this.table.AddButtonText = 'Add User Type';
      this.table.Rows = this.service.FormatResponse(result).Data;
    }, (error) => {
      this.HandleError(error);
    }, () => {
      return this.records;
    });
  }
  AddUserType() {
    this.dialogType = DialogType.Add;
  }
  SavedDialogClick($event: UserType, dialogType: DialogType) {
    this.selectedRecord = $event;
    this.service.Post("usertype", "add", this.selectedRecord).subscribe((result: Object) => {
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
