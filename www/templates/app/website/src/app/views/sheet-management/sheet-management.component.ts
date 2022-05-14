import { Component, OnInit } from '@angular/core';
import { DataColumn, DataTable } from 'src/app/classes/data-table';
import { DialogType } from 'src/app/classes/dialog-type';
import { Dictionary } from 'src/app/classes/dictionary';
import { SheetElement } from 'src/app/classes/sheet-element';
import { SheetElementType } from 'src/app/classes/sheet-element-type';
import { BaseComponent } from 'src/app/components/base/base.component';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-sheet-management',
  templateUrl: './sheet-management.component.html',
  styleUrls: ['./sheet-management.component.scss']
})

export class SheetManagementComponent extends BaseComponent implements OnInit {

  public visible!: Dictionary<boolean>;
  public elementTypes!: Array<SheetElementType>;
  public editTitle!: string;
  public selectedElements: any;

  constructor(service: CommonsService) { super(service); }

  ngOnInit(): void {
    this.visible = new Dictionary<boolean>();
    this.selectedElements = {};
    this.service.Get("sheetelement", "getsheetelementypes").subscribe((result: Object) => {
      this.elementTypes = this.service.FormatResponse(result).Data;
    }, (error) => {
      this.HandleError(error);
    });
    this.service.Get("sheetelement", "getsheetelementstable").subscribe((result: Object) => {
      this.records = this.service.FormatResponse(result).Data;

      let fields = Object.getOwnPropertyNames(this.records);
      let fieldFormatted =  new Array<any>();
      fields.forEach((f: string) => {
        fieldFormatted.push({ Name: f, Childrens: this.records[f].Rows, Fields: this.records[f].Columns });
      });
      this.table = new DataTable();
      this.table.Columns = new Array<DataColumn>();
      this.table.Columns.push(new DataColumn("Name", "string"));

      this.table.EditButton = this.table.DeleteButton = this.table.AddButton = true;
      this.table.AddButtonText = 'Add Sheet Element';
      this.table.Rows = fieldFormatted;
      this.table.ChildrenRows = true;

    }, (error) => {
      this.HandleError(error);
    });
  }

  Edit(id: SheetElement) {
    this.selectedRecord = id;
    console.log(this.selectedRecord);
    this.dialogType = DialogType.Edit;
    this.editTitle = "Edit Sheet Element";
  }
  AddSheetElement() {
    this.dialogType = DialogType.Add;
    this.editTitle = "Add Sheet element";
  }
  SavedDialogClick($event: FormData, dialogType: DialogType) {
    if(dialogType == DialogType.Add) {
      this.service.Post("sheetelement", "add", $event).subscribe((result: Object) => {
        if(this.service.FormatResponse(result).Data) {
          this.CancelDialogClick();
          location.reload();
        }
      }, (error) => {
        this.HandleError(error);
      });
    }
    else {
      this.service.Post("sheetelement", "update", $event).subscribe((result: Object) => {
        if(this.service.FormatResponse(result).Data) {
          this.CancelDialogClick();
          location.reload();
        }
      }, (error) => {
        this.HandleError(error);
      });
    }
  }
}
