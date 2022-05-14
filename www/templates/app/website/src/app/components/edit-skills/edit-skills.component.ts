import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SheetElement, SheetElementValue } from 'src/app/classes/sheet-element';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.scss']
})
export class EditSkillsComponent implements OnInit {

  @Input() skills!: Array<SheetElementValue>;
  @Output() valueChanged = new EventEmitter();
  public frmGroup!: FormGroup;
  @Output() next = new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.frmGroup = this.createForm();
  }
  createForm(): FormGroup {
    let vett: { [key: string]: FormControl; } = {};
    this.skills.forEach((a: SheetElementValue) => {
      vett[a.Element.ID.toString()] = new FormControl({ value: a.Value, disabled: (a.Element.Enabled != null ? !a.Element.Enabled : false) }, Validators.compose([Validators.required, Validators.min(a.Element.Min), Validators.max(a.Element.Max)]));
    });
    return this.fb.group(vett);
  }
  ValueChanged() {
    this.skills.forEach((a: SheetElementValue) => {
      a.Element.Name = a.Element.Name;
      a.Value = this.frmGroup.controls[a.Element.ID.toString()].value;
    });
    this.valueChanged.emit(this.skills);
  }
  onSubmit() {
    this.ValueChanged();
    this.next.emit();
  }
}
