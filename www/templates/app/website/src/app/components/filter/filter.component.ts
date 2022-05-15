import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  public frmGroup!: FormGroup;
  public error!: string;
  @Input() hasFilter!: boolean;
  @Output() search = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.frmGroup = this.createForm();
  }
  createForm(): FormGroup {
    let vett: { [key: string]: FormControl; } = {};
    vett['search'] = new FormControl("", Validators.compose([Validators.required]));
    return this.fb.group(vett);
  }
  onSubmit() {
    this.search.emit(this.frmGroup.controls['search'].value);
  }
  Reset() {
    this.frmGroup.controls['search'].setValue("");
    this.search.emit("");
  }
}
