import { Component, OnInit } from '@angular/core';
import { DataTable, DataColumn } from 'src/app/classes/data-table';
import { DialogType } from 'src/app/classes/dialog-type';
import { BaseComponent } from 'src/app/components/base/base.component';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-guilds',
  templateUrl: './guilds.component.html',
  styleUrls: ['./guilds.component.scss']
})
export class GuildsComponent extends BaseComponent implements OnInit {

  constructor(service: CommonsService) { super(service); }

  ngOnInit(): void {
    this.service.Get("guild", "getguilds").subscribe((result: Object) => {
      this.table = new DataTable();
      this.table.Columns = new Array<DataColumn>();
      this.table.Columns.push(new DataColumn("Name", "string"));
      this.table.Columns.push(new DataColumn("Icon", "img"));

      this.table.EditButton = this.table.DeleteButton = this.table.AddButton = true;
      this.table.AddButtonText = 'Add Guild';
      this.table.Rows = this.service.FormatResponse(result).Data;

    }, (error) => {
      this.HandleError(error);
    });
  }

  Edit(id: any) {
    this.selectedRecord = id;
    this.dialogType = DialogType.Edit;
  }
  Add() {
    this.dialogType = DialogType.Add;
  }

}
