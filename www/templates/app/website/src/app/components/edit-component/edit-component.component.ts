import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route } from 'src/app/classes/route';
import { SiteComponent } from 'src/app/classes/site-component';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.scss']
})
export class EditComponentComponent implements OnInit {

  public frmGroup!: FormGroup;
  @Input() selectedComponent!: SiteComponent;
  @Input() routes!: Array<Route>;
  @Input() error!: string;
  @Output() saved = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.frmGroup = this.createForm();
  }
  createForm(): FormGroup {
    let vett: { [key: string]: FormControl; } = {};
    if(this.selectedComponent == null) {
      this.selectedComponent = new SiteComponent();
      this.selectedComponent.Name = "";
      this.selectedComponent.Route = new Route();
      this.selectedComponent.Content = "";
    }
    vett['name'] = new FormControl(this.selectedComponent.Name, Validators.compose([Validators.required]));
    vett['route'] = new FormControl(this.selectedComponent.Route.ID, Validators.compose([Validators.required]));
    vett['content'] = new FormControl(this.selectedComponent.Content, Validators.compose([Validators.required]));
    return this.fb.group(vett);
  }
  onSubmit() {
    this.selectedComponent.Name = this.frmGroup.controls['name'].value;
    this.selectedComponent.Route.ID = this.frmGroup.controls['route'].value;
    this.selectedComponent.Content = this.frmGroup.controls['content'].value;
    this.saved.emit(this.selectedComponent);
  }

}
