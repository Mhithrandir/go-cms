import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DataColumn, DataTable } from 'src/app/classes/data-table';
import { DialogType } from 'src/app/classes/dialog-type';
import { Topic } from 'src/app/classes/topic';
import { TopicMessage } from 'src/app/classes/topic-message';
import { BaseComponent } from 'src/app/components/base/base.component';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent extends BaseComponent implements OnInit {

  public editTitle!: string;
  public frmGroup!: FormGroup;

  constructor(service: CommonsService, private fb: FormBuilder) { super(service); }

  ngOnInit(): void {
    this.frmGroup = this.createForm();
    this.service.Get("forum", "getopics").subscribe((result: Object) => {
      // this.records = this.service.FormatResponse(result).Data;

      this.table = new DataTable();
      this.table.Columns = new Array<DataColumn>();
      this.table.Columns.push(new DataColumn("Icon", "image"));
      this.table.Columns.push(new DataColumn("Title", "string"));
      this.table.Columns.push(new DataColumn("Author.Username", "string", "Author"));
      this.table.Columns.push(new DataColumn("Closed", "bool"));

      this.table.EditButton = this.table.DeleteButton = this.table.AddButton = true;
      this.table.AddButtonText = 'Add Topic';
      this.table.Rows = this.service.FormatResponse(result).Data;

    }, (error) => {
      this.HandleError(error);
    });
  }
  createForm(): FormGroup {
    let vett: { [key: string]: FormControl; } = {};
    vett['msg'] = new FormControl("", Validators.compose([Validators.required]));
    return this.fb.group(vett);
  }
  Edit(id: any) {
    this.selectedRecord = id;
    this.dialogType = DialogType.Edit;
    this.editTitle = "Edit Equip";
  }
  AddTopic() {
    this.dialogType = DialogType.Add;
    this.editTitle = "Add Equip";
  }

  SavedDialogClick($event: FormData, dialogType: DialogType) {
    if(dialogType == DialogType.Add) {
      this.service.Post("forum", "add", $event).subscribe((result: Object) => {
        let res = this.service.FormatResponse(result).Data;
        if(res) {
          this.CancelDialogClick();
          location.reload();
        }
      });
    }
    else if(dialogType == DialogType.Edit) {
      this.service.Post("forum", "update", $event).subscribe((result: Object) => {
        let res = this.service.FormatResponse(result).Data;
        if(res) {
          this.CancelDialogClick();
          location.reload();
        }
      });
    }
  }
  OpenTopic($event: Topic) {
    $event.Open = !$event.Open;
    if($event.Open) {
      this.service.Get("forum", "getopic?id=" + $event.ID).subscribe((result: Object) => {
        $event.Messages = this.service.FormatResponse(result).Data;
        this.selectedRecord = $event;
      }, (error) => {
        this.HandleError(error);
      });
    }
    else {
      this.selectedRecord = null;
    }
  }
  onSubmit() {
    let m = new TopicMessage();
    m.Message = this.frmGroup.controls['msg'].value;
    m.IDParent = this.selectedRecord.ID;
    this.frmGroup.reset();
    this.service.Post("forum", "addmessage", m).subscribe((result: Object) => {
      
    }, (error) => {
      this.HandleError(error);
    });
  }
}
