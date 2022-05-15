import { Component, OnInit } from '@angular/core';
import { DialogType } from 'src/app/classes/dialog-type';
import { PageButton } from 'src/app/classes/page-button';
import { UserType } from 'src/app/classes/user-type';
import { BaseComponent } from 'src/app/components/base/base.component';
import { CommonsService } from 'src/app/services/commons.service';
import { Route } from 'src/app/classes/route';
import { LogItem } from 'src/app/classes/log-item';
import { DataTable, DataColumn } from 'src/app/classes/data-table';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent extends BaseComponent implements OnInit {

  public userTypes!: Array<UserType>;
  public editTitle!: string;
  public hasFilter!: boolean;
  
  constructor(service: CommonsService) { super(service); }
  
  ngOnInit(): void {
    this.service.Get("usertype", "getusertypes").subscribe((result: Object) => {
      this.userTypes = this.service.FormatResponse(result).Data;
    }, (error) => {
      this.HandleError(error);
    });
    this.Load();
  }
  NextPage(_page: string) {
    this.page = _page;
    this.Load();
  }
  Load() {
    this.service.Get("route", "getroutes?page=" + this.page).subscribe((result: Object) => {
      this.loadDataGrid(this.service.FormatResponse(result));
    }, (error) => {
      this.HandleError(error);
    });
  }
  Edit(id: Route) {
    this.selectedRecord = id;
    this.dialogType = DialogType.Edit;
    this.editTitle = "Edit Route";
  }
  AddRoute() {
    this.dialogType = DialogType.Add;
    this.editTitle = "Add Route";
  }
  SavedDialogClick($event: Route, dialogType: DialogType) {
    this.selectedRecord = $event;
    if(dialogType == DialogType.Add) {
      this.service.Post("route", "add", this.selectedRecord).subscribe((result: Object) => {
        let res = this.service.FormatResponse(result).Data;
        if(res) {
          this.CancelDialogClick();
          location.reload();
        }
      });
    }
    else {
      this.service.Post("route", "update", this.selectedRecord).subscribe((result: Object) => {
        let res = this.service.FormatResponse(result).Data;
        if(res) {
          this.CancelDialogClick();
          location.reload();
        }
      });
    }
  }
  Search($event: string) {
    if ($event != "") {
      this.service.Get("route", "getroutesfiltered?func=" + $event).subscribe((result: Object) => {
        this.loadDataGrid(this.service.FormatResponse(result));
        this.hasFilter = true;
      }, (error) => {
        this.HandleError(error);
      });
    }
    else {
      this.hasFilter = false;
      this.Load();
    }
  }

  loadDataGrid(data: any) {
    this.records = data.Data;
    this.table = new DataTable();
    this.table.Columns = new Array<DataColumn>();
    this.table.Columns.push(new DataColumn("Package", "string"));
    this.table.Columns.push(new DataColumn("Func", "string"));
    this.table.Columns.push(new DataColumn("Type", "string"));
    this.table.Columns.push(new DataColumn("Path", "string"));
    this.table.Columns.push(new DataColumn("Methods", "string"));
    for(let i = 0; i < this.userTypes.length; i++){
      this.table.Columns.push(new DataColumn("Permissions[" + i.toString() + "].Enabled", "bool", this.userTypes[i].Description));
    }
    this.table.EditButton = this.table.DeleteButton = this.table.AddButton = true;
    this.table.AddButtonText = 'Add Routes';
    this.table.Rows = data.Data;
    this.table.Pagination = new Array<PageButton>();
    this.pagination = new Array<PageButton>();
    for(let i = 0; i < data.PageCount; i++) {
      let pageButton = new PageButton();
      pageButton.Text = i.toString();
      pageButton.Active = (i == data.Page);
      this.pagination.push(pageButton);
      this.table.Pagination.push(pageButton);
    }
  }
}
