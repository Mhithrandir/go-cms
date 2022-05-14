import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MenuItem } from 'src/app/classes/menu-item';
import { Route } from 'src/app/classes/route';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.scss']
})
export class EditMenuComponent implements OnInit {

  public frmGroup!: FormGroup;
  @Input() selectedMenu!: MenuItem;
  @Input() menu!: Array<MenuItem>;
  @Input() routes!: Array<Route>;
  @Input() error!: string;
  @Output() saved = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.frmGroup = this.createForm();
  }
  createForm(): FormGroup {
    let vett: { [key: string]: FormControl; } = {};
    if(this.selectedMenu == null) {
      this.selectedMenu = new MenuItem();
      this.selectedMenu.MenuName = '';
      this.selectedMenu.Name = '';
      this.selectedMenu.MenuOrder = 0;
      this.selectedMenu.Parent = -1;
      this.selectedMenu.IDRoute = -1;
    }
    vett['menuname'] = new FormControl(this.selectedMenu.MenuName, Validators.compose([Validators.required]));
    vett['name'] = new FormControl(this.selectedMenu.Name, Validators.compose([Validators.required]));
    vett['menuorder'] = new FormControl(this.selectedMenu.MenuOrder, Validators.compose([Validators.required, Validators.min(0)]));
    vett['parent'] = new FormControl(this.selectedMenu.Parent, Validators.compose([Validators.required, Validators.min(-1)]));
    vett['route'] = new FormControl(this.selectedMenu.IDRoute, Validators.compose([Validators.required]));
    return this.fb.group(vett);
  }
  onSubmit() {
    this.selectedMenu.MenuName = this.frmGroup.controls['menuname'].value;
    this.selectedMenu.Name = this.frmGroup.controls['name'].value;
    this.selectedMenu.MenuOrder = this.frmGroup.controls['menuorder'].value;
    this.selectedMenu.Parent = parseInt(this.frmGroup.controls['parent'].value);
    this.selectedMenu.IDRoute = parseInt(this.frmGroup.controls['route'].value);
    this.saved.emit(this.selectedMenu);
  }

}
