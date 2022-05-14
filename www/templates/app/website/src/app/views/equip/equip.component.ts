import { Component, OnInit } from '@angular/core';
import { DataTable, DataColumn } from 'src/app/classes/data-table';
import { DialogType } from 'src/app/classes/dialog-type';
import { Equip } from 'src/app/classes/equip';
import { EquipType } from 'src/app/classes/equip-type';
import { BaseComponent } from 'src/app/components/base/base.component';
import { TabComponent } from 'src/app/components/tab/tab.component';
import { TabsComponent } from 'src/app/components/tabs/tabs.component';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-equip',
  templateUrl: './equip.component.html',
  styleUrls: ['./equip.component.scss']
})
export class EquipComponent extends BaseComponent implements OnInit {
  
  public editTitle!: string;
  public equipTypes!: Array<EquipType>;

  constructor(service: CommonsService) { super(service); }

  ngOnInit(): void {
    this.records = new Array<Equip>();
    this.service.Get("equip", "getequiptypes").subscribe((result: Object) => {
      this.equipTypes = this.service.FormatResponse(result).Data;
      let t: TabComponent = new TabComponent(new TabsComponent());
      t.title = this.equipTypes[0].Name;
      this.SelectedTab(t)
    }, (error) => {
      this.HandleError(error);
    });
  }
  Edit(id: any) {
    this.selectedRecord = id;
    this.dialogType = DialogType.Edit;
    this.editTitle = "Edit Equip";
  }
  AddEquip() {
    this.dialogType = DialogType.Add;
    this.editTitle = "Add Equip";
  }

  SavedDialogClick($event: FormData, dialogType: DialogType) {
    if(dialogType == DialogType.Add) {
      this.service.Post("equip", "add", $event).subscribe((result: Object) => {
        let res = this.service.FormatResponse(result).Data;
        if(res) {
          this.CancelDialogClick();
          location.reload();
        }
      });
    }
    else if(dialogType == DialogType.Edit) {
      this.service.Post("equip", "update", $event).subscribe((result: Object) => {
        let res = this.service.FormatResponse(result).Data;
        if(res) {
          this.CancelDialogClick();
          location.reload();
        }
      });
    }
  }

  SelectedTab($event: TabComponent) {
    console.log($event);
    this.service.Get("equip", "getequip?type=" + $event.title).subscribe((equipResponse: Object) => {
      this.table = new DataTable();
      this.table.Columns = new Array<DataColumn>();
      this.table.Columns.push(new DataColumn("Icon", "image"));
      this.table.Columns.push(new DataColumn("Name", "string"));
      this.table.Columns.push(new DataColumn("Description", "html"));
      this.table.Columns.push(new DataColumn("Price", "string"));
      this.table.Columns.push(new DataColumn("Size", "string"));

      this.table.EditButton = this.table.DeleteButton = this.table.AddButton = true;
      this.table.AddButtonText = 'Add Equipment';
      this.table.Rows = this.service.FormatResponse(equipResponse).Data;
    }, (error) => {
      this.HandleError(error);
    });
  }
}
