import { Component, OnInit } from '@angular/core';
import { DataTable, DataColumn } from 'src/app/classes/data-table';
import { DialogType } from 'src/app/classes/dialog-type';
import { EditorElement } from 'src/app/classes/editor-element';
import { Route } from 'src/app/classes/route';
import { SiteComponent } from 'src/app/classes/site-component';
import { UserType } from 'src/app/classes/user-type';
import { BaseComponent } from 'src/app/components/base/base.component';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-component-editor',
  templateUrl: './component-editor.component.html',
  styleUrls: ['./component-editor.component.scss']
})
export class ComponentEditorComponent extends BaseComponent implements OnInit {

  public userTypes!: Array<UserType>;
  public editTitle!: string;
  public routes!: Array<Route>;

  constructor(service: CommonsService) { super(service); }

  ngOnInit(): void {
    this.service.Get("usertype", "getusertypes").subscribe((result: Object) => {
      this.userTypes = this.service.FormatResponse(result).Data;
    }, (error) => {
      this.HandleError(error);
    });
    this.service.Get("route", "getroutesfiltered?package=page").subscribe((result: Object) => {
      let data = this.service.FormatResponse(result);
      this.routes = data.Data;
    }, (error) => {
      this.HandleError(error);
    });
    this.service.Get("component", "getcomponents?page=" + this.page).subscribe((result: Object) => {
      // this.records = this.service.FormatResponse(result).Data;
      this.table = new DataTable();
      this.table.Columns = new Array<DataColumn>();
      this.table.Columns.push(new DataColumn("IDElement", "string", "Name"));
      this.table.Columns.push(new DataColumn("Type", "string"));
      this.table.Columns.push(new DataColumn("Route.Path", "string", "Route"));
      for(let i = 0; i < this.userTypes.length; i++){
        this.table.Columns.push(new DataColumn("Route.Permissions[" + i.toString() + "].Enabled", "bool", this.userTypes[i].Description));
      }
      this.table.EditButton = this.table.DeleteButton = this.table.AddButton = true;
      this.table.AddButtonText = 'Add Component';
      this.table.Rows = this.service.FormatResponse(result).Data;
    }, (error) => {
      this.HandleError(error);
    });
  }

  Edit(id: any) {
    this.selectedRecord = id;
    this.dialogType = DialogType.Edit;
  }
  AddElement() {
    this.selectedRecord = new EditorElement();
    this.selectedRecord.Childrens = new Array<any>();
    this.selectedRecord.Type = "main";
    this.selectedRecord.VerticalOrientation = true;
    this.selectedRecord.IDParent = -1;
    this.dialogType = DialogType.Add;
  }

  SavedDialogClick($event: EditorElement) {
    if(this.dialogType == DialogType.Add) {
      this.service.Post("component", "add", $event).subscribe((result: Object) => {
        let res = this.service.FormatResponse(result).Data;
        if(res) {
          this.CancelDialogClick();
          location.reload();
        }
      });
    }
    else if(this.dialogType == DialogType.Edit) {
      this.service.Post("component", "update", $event).subscribe((result: Object) => {
        let res = this.service.FormatResponse(result).Data;
        if(res) {
          this.CancelDialogClick();
          location.reload();
        }
      });
    }
  }
  SavePage(f: FormData) {
    this.service.Post("component", "add", f).subscribe((result: Object) => {
      
    });
  }
}
