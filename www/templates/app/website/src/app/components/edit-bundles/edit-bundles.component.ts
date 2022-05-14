import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SheetElement, SheetElementValue } from 'src/app/classes/sheet-element';

@Component({
  selector: 'app-edit-bundles',
  templateUrl: './edit-bundles.component.html',
  styleUrls: ['./edit-bundles.component.scss']
})
export class EditBundlesComponent implements OnInit {

  @Input() bundles!: Array<SheetElementValue>;
  @Input() scheda!: { [key: string]: any; };
  @Output() valueChanged = new EventEmitter();
  @Output() next = new EventEmitter();
  public frmGroup!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.frmGroup = this.createForm();
  }
  createForm(): FormGroup {
    let vett: { [key: string]: FormControl; } = {};
    // this.bundles.forEach((a: SheetElementValue) => {
    //   vett[a.Element.ID.toString()] = new FormControl({ value: a.Value, disabled: (a.Element.Enabled != null ? !a.Element.Enabled : false) });
    // });
    this.scheda["Bundles"].forEach((a: SheetElementValue) => {
      vett[a.Element.ID.toString()] = new FormControl({ value: a.Value, disabled: (a.Element.Enabled != null ? !a.Element.Enabled : false) });
    });
    return this.fb.group(vett);
  }

  ValueChanged() {
    this.bundles.forEach((a: SheetElementValue) => {
      a.Value = this.frmGroup.controls[a.Element.ID.toString()].value;
    });
    this.valueChanged.emit(this.bundles);
  }
  onSubmit() {
    this.ValueChanged();
    this.next.emit();
  }
}
