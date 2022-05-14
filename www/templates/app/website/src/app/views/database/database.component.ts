import { Component, OnInit } from '@angular/core';
import { Db } from 'src/app/classes/db';
import { TableDefinition } from 'src/app/classes/table-definition';
import { BaseComponent } from 'src/app/components/base/base.component';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent extends BaseComponent implements OnInit {

  public tables!: Array<TableDefinition>;

  constructor(service: CommonsService) { super(service); }

  ngOnInit(): void {
    this.service.Get("dbapi", "getdatabases").subscribe((result: Object) => {
      this.records = this.service.FormatResponse(result).Data;
      this.records.forEach((r: Db) => {
        r.Database = atob(r.Database);
      });
    }, (error) => {
      this.HandleError(error);
    });
  }
  Expanded($event: string) {
    this.service.Get("dbapi", "gettables?db=" + $event).subscribe((result: Object) => {
      this.tables = this.service.FormatResponse(result).Data;
      this.tables.forEach((t: TableDefinition) => {
        t.ENGINE = atob(t.ENGINE);
        t.ROW_FORMAT = atob(t.ROW_FORMAT);
        t.TABLE_CATALOG = atob(t.TABLE_CATALOG);
        t.TABLE_COLLATION = atob(t.TABLE_COLLATION);
        t.TABLE_COMMENT = atob(t.TABLE_COMMENT);
        t.TABLE_NAME = atob(t.TABLE_NAME);
        t.TABLE_SCHEMA = atob(t.TABLE_SCHEMA);
        t.TABLE_TYPE = atob(t.TABLE_TYPE);
        t.TEMPORARY = atob(t.TEMPORARY);
        t.UPDATE_TIME = atob(t.UPDATE_TIME);
      });
      console.log(this.tables);
    }, (error) => {
      this.HandleError(error);
    });
  }
}
