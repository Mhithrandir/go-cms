import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataColumn, DataTable } from 'src/app/classes/data-table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() table!: DataTable;
  @Output() edited = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() added = new EventEmitter();
  @Output() pagechanged = new EventEmitter();
  @Output() rowselected = new EventEmitter();
  public IsExpanded: boolean = false;
  public tableChildren!: DataTable;
  
  constructor() { }

  ngOnInit(): void {
  }

  Edit(record: any) {
    this.edited.emit(record);
  }

  Delete(record: any) {
    this.deleted.emit(record);
  }

  Add() {
    this.added.emit();
  }

  Expanded($event: any) {
    this.IsExpanded = !this.IsExpanded;
    $event.IsExpanded = !$event.IsExpanded;
    this.tableChildren = this.table.Copy();
    if($event.Fields != null) {
      this.tableChildren.Columns = new Array<DataColumn>();
      $event.Fields.forEach((f: string) => {
        if(f == "Icon") {
          this.tableChildren.Columns.push(new DataColumn(f, "image"));
        }
        else {
          this.tableChildren.Columns.push(new DataColumn(f, "string"));
        }
      });
    }
    this.tableChildren.Rows = $event.Childrens;
    this.tableChildren.ChildrenRows = true;
    this.tableChildren.AddButton = false;
  }

  GetPropretyValue(item: any, path: string): any {
    if(path.indexOf(".") > -1) {
      let pathTemp = path.substring(0, path.indexOf("."));
      let index = this.GetIndex(pathTemp);
      if(index > -1) {
        pathTemp = pathTemp.substring(0, pathTemp.indexOf("["));
        return this.GetPropretyValue(item[pathTemp][index], path.substring(path.indexOf(".") + 1, path.length));
      }
      return this.GetPropretyValue(item[pathTemp], path.substring(path.indexOf(".") + 1, path.length));
    }
    let index = this.GetIndex(path);
    if(index > -1) {
      path = path.substring(0, path.indexOf("["));
      return item[path][index];
    }
    return item[path];
  }
  GetIndex(path: string): number {
    if((path.indexOf("[") > -1) && (path.indexOf("]") > -1)) {
      return parseInt(path.substring(path.indexOf("[") + 1, path.indexOf("]")));
    }
    return -1;
  }
  NextPage(page: string) {
    this.pagechanged.emit(page);
  }
  SelectedRow($event: any) {
    let tempStatus = $event.Selected;
    this.table.Rows.forEach((r: any) => {
      r.Selected = false;
    });
    if(tempStatus == null) {
      $event.Selected = true;
    }
    else {
      $event.Selected = !tempStatus;
    }
    this.rowselected.emit($event);
  }
  GetClass(): string {
    let styleName = "table";
    if(this.table.ChildrenRows) {
      styleName += "-children";
    }
    if(this.table.EditButton || this.table.DeleteButton) {
      styleName += "-edit";
    }
    return styleName + "-" + this.table.Columns.length.toString();
  }
  GetRowClass(r: any): string {
    let styleName = "table";
    if(this.table.ChildrenRows) {
      styleName += "-children";
    }
    if(this.table.EditButton || this.table.DeleteButton) {
      styleName += "-edit";
    }
    if(r.Selected) {
      return styleName + "-" + this.table.Columns.length.toString() + " selected";
    }
    return styleName + "-" + this.table.Columns.length.toString();
  }
}
