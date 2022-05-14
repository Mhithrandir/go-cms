import { Component, OnInit } from '@angular/core';
import { DataTable, DataColumn } from 'src/app/classes/data-table';
import { DialogType } from 'src/app/classes/dialog-type';
import { MenuItem } from 'src/app/classes/menu-item';
import { Route } from 'src/app/classes/route';
import { UserType } from 'src/app/classes/user-type';
import { BaseComponent } from 'src/app/components/base/base.component';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.scss']
})
export class MenuViewComponent extends BaseComponent implements OnInit {

  public menuNames!: Array<string>;
  public menuParent!: Array<MenuItem>;
  public routes!: Array<Route>;
  public editTitle!: string;
  public userTypes!: Array<UserType>;

  constructor(service: CommonsService) { super(service); }

  ngOnInit(): void {
    this.menuParent = new Array<MenuItem>();
    let noParent: MenuItem = new MenuItem();
    noParent.MenuName = "";
    noParent.Name = "Toolbar";
    noParent.ID = -1;
    this.menuParent.push(noParent);

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
    this.service.Get("menu", "getmenunames").subscribe((result: Object) => {
      let pkgResponse = this.service.FormatResponse(result);
      this.table = new DataTable();
      this.table.Columns = new Array<DataColumn>();
      this.table.Columns.push(new DataColumn("MenuName", "string", "Menu Name"));
      this.table.Columns.push(new DataColumn("Name", "string"));
      this.table.Columns.push(new DataColumn("MenuOrder", "string", "Order"));
      for(let i = 0; i < this.userTypes.length; i++){
        this.table.Columns.push(new DataColumn("Route.Permissions[" + i.toString() + "].Enabled", "bool", this.userTypes[i].Description));
      }
      this.table.EditButton = this.table.DeleteButton = this.table.AddButton = true;
      this.table.AddButtonText = 'Add Menu Item';
      this.table.Rows = new Array<MenuItem>();
      this.table.ChildrenRows = true;
      pkgResponse.Data.forEach((menuName: string) => {
        console.log(menuName);
        this.service.Get("menu", "getMenu?menuName=" + menuName).subscribe((response: Object) => {
          this.table.Rows = this.ConcatArray(this.table.Rows, this.service.FormatResponse(response).Data); ///this.table.Rows.concat(this.service.FormatResponse(response).Data, this.table.Rows);
        }, (error) => {
          this.HandleError(error);
        });
      });
    }, (error) => {
      this.HandleError(error);
    });
  }
  Edit(id: MenuItem) {
    this.selectedRecord = id;
    this.dialogType = DialogType.Edit;
    this.editTitle = "Edit Menu Item";
    this.records[id.MenuName].forEach((m: MenuItem) => {
      this.menuParent.push(m);
    });
  }
  AddMenu() {
    this.dialogType = DialogType.Add;
    this.editTitle = "Add Menu";
  }
  SavedDialogClick($event: MenuItem, dialogType: DialogType) {
    this.selectedRecord = $event;
    if(dialogType == DialogType.Add) {
      this.service.Post("menu", "add", this.selectedRecord).subscribe((result: Object) => {
        let res = this.service.FormatResponse(result).Data;
        if(res) {
          this.CancelDialogClick();
          location.reload();
        }
      }, (error) => {
        this.HandleError(error);
      });
    }
    else {
      this.service.Post("menu", "update", this.selectedRecord).subscribe((result: Object) => {
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

  ConcatArray(first: Array<MenuItem>, second: Array<MenuItem>): Array<MenuItem> {
    for(let i = 0;i < second.length; i++) {
      if(!this.Contain(first, second[i].ID)) {
        first.push(second[i]);
      }
    }
    return first;
  }
  Contain(first: Array<MenuItem>, ID: number): boolean {
    for(let i = 0;i < first.length; i++) {
      if(first[i].ID == ID) {
        return true;
      }
    }
    return false;
  }
}
