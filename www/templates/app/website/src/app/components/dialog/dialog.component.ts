import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogType } from 'src/app/classes/dialog-type';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  @Input() dialogType: DialogType = DialogType.Null;
  @Input() title: string = "";
  @Output() okClick = new EventEmitter();
  @Output() cancelClick = new EventEmitter();
  @Output() deleteClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  OkClick() {
    this.okClick.emit();
  }
  DeleteClick() {
    this.deleteClick.emit();
  }
  CancelClick() {
    this.cancelClick.emit();
  }
}
