import { Component, OnInit } from '@angular/core';
import { DialogType } from 'src/app/classes/dialog-type';
import { BaseComponent } from 'src/app/components/base/base.component';
import { CommonsService } from 'src/app/services/commons.service';
import { Location } from 'src/app/classes/location';
import { DataColumn, DataTable } from 'src/app/classes/data-table';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent extends BaseComponent implements OnInit {
  
  public editTitle!: string;
  public parents!: Array<Location>;
  public selectedParent: number = -1;

  constructor(service: CommonsService) { super(service); }

  ngOnInit(): void {
    this.parents = new Array<Location>();
    let l = new Location();
    l.Name = "No parent";
    l.ID = -1;
    this.parents.push(l);

    this.service.Get("location", "getlocations").subscribe((result: Object) => {
      // this.records = this.service.FormatResponse(result).Data;
      this.table = new DataTable();
      this.table.Columns = new Array<DataColumn>();
      this.table.Columns.push(new DataColumn("Name", "string"));
      this.table.Columns.push(new DataColumn("Description", "html"));
      this.table.Columns.push(new DataColumn("Image", "image"));
      this.table.Columns.push(new DataColumn("X", "string"));
      this.table.Columns.push(new DataColumn("Y", "string"));
      this.table.Columns.push(new DataColumn("IDParent", "string"));
      this.table.Columns.push(new DataColumn("HasChat", "bool"));
      this.table.AddButton = this.table.EditButton = this.table.DeleteButton = true;
      this.table.ChildrenRows = true;
      this.table.Rows = this.service.FormatResponse(result).Data;
      this.table.AddButtonText = "Add location";
      
    }, (error) => {
      this.HandleError(error);
    });
    // this.service.Get("equip", "getequiptypes").subscribe((result: Object) => {
    //   this.parents = this.service.FormatResponse(result).Data;
    // }, (error) => {
    //   this.HandleError(error);
    // });
  }
  Edit(id: Location) {
    this.selectedRecord = id;
    this.dialogType = DialogType.Edit;
    this.editTitle = "Edit Location";
  }
  AddLocation() {
    this.dialogType = DialogType.Add;
    this.editTitle = "Add Location";
  }

  SavedDialogClick($event: FormData, dialogType: DialogType) {
    if(dialogType == DialogType.Add) {
      this.service.Post("location", "add", $event).subscribe((result: Object) => {
        let res = this.service.FormatResponse(result).Data;
        if(res) {
          this.CancelDialogClick();
          location.reload();
        }
      });
    }
    else if(dialogType == DialogType.Edit) {
      this.service.Post("location", "update", $event).subscribe((result: Object) => {
        let res = this.service.FormatResponse(result).Data;
        if(res) {
          this.CancelDialogClick();
          location.reload();
        }
      });
    }
  }
  Expanded($event: any) {

  }
}

