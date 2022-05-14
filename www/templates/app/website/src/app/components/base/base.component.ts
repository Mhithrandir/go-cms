import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataTable } from 'src/app/classes/data-table';
import { DeleteRequest } from 'src/app/classes/delete-request';
import { DialogType } from 'src/app/classes/dialog-type';
import { PageButton } from 'src/app/classes/page-button';
import { CommonsService } from '../../services/commons.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  public page: string = "0";
  public selectedRecord!: any;
  public records!: Array<any> | any;
  public dialogType: DialogType = DialogType.Null;
  public pagination!: Array<PageButton>;
  public error!: string;
  public table!: DataTable;
  
  constructor(public service: CommonsService) {
  }

  ngOnInit(): void {
  }

  public HandleError(_error: Error) {
    this.service.SetError(_error);
    this.error = _error.message;
    console.error(_error);
  }
  public OpenDeleteDialog(id: number, pkg: string, func: string) {
    this.dialogType = DialogType.Delete;
    this.selectedRecord = new DeleteRequest();
    this.selectedRecord.ID = id;
    this.selectedRecord.Package = pkg;
    this.selectedRecord.Func = func;
    this.service.ShowDeleteDialog(this.selectedRecord);
  }
  public CancelDialogClick() {
    this.dialogType = DialogType.Null;
    this.selectedRecord = null;
  }
  public DeletelDialogClick() {
    this.service.Delete(this.selectedRecord.Package, this.selectedRecord.Func, this.selectedRecord.ID).subscribe((result: Object) => {
      if(this.service.FormatResponse(result).Data) {
        this.dialogType = DialogType.Null;
        location.reload();
      }
    });
  }
}
