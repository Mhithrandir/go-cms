import { Component, OnInit } from '@angular/core';
import { DialogType } from 'src/app/classes/dialog-type';
import { EquipType } from 'src/app/classes/equip-type';
import { BaseComponent } from 'src/app/components/base/base.component';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-equip-type',
  templateUrl: './equip-type.component.html',
  styleUrls: ['./equip-type.component.scss']
})
export class EquipTypeComponent extends BaseComponent implements OnInit {
  public editTitle!: string;

  constructor(service: CommonsService) { super(service); }

  ngOnInit(): void {
    this.service.Get("equip", "getequiptypes").subscribe((result: Object) => {
      this.records = this.service.FormatResponse(result).Data;
    }, (error) => {
      this.HandleError(error);
    });
  }
  Edit(id: any) {
    this.selectedRecord = id;
    this.dialogType = DialogType.Edit;
    this.editTitle = "Edit Equip";
  }
  AddEquipType() {
    this.dialogType = DialogType.Add;
    this.editTitle = "Add Equip";
  }
  SavedDialogClick($event: EquipType, dialogType: DialogType) {
    this.selectedRecord = $event;
    if(dialogType == DialogType.Add) {
      this.service.Post("equip", "addtype", this.selectedRecord).subscribe((result: Object) => {
        let res = this.service.FormatResponse(result).Data;
        if(res) {
          this.CancelDialogClick();
          location.reload();
        }
      });
    }
  }
}
