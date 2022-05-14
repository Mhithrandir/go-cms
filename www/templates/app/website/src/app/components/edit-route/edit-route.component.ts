import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Route } from 'src/app/classes/route';
import { RoutePermission } from 'src/app/classes/route-permission';
import { UserType } from 'src/app/classes/user-type';

@Component({
  selector: 'app-edit-route',
  templateUrl: './edit-route.component.html',
  styleUrls: ['./edit-route.component.scss']
})
export class EditRouteComponent implements OnInit {

  public frmGroup!: FormGroup;
  @Input() selectedRoute!: Route;
  @Input() userTypes!: Array<UserType>;
  @Input() error!: string;
  @Output() saved = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.frmGroup = this.createForm();
  }
  createForm(): FormGroup {
    let vett: { [key: string]: FormControl; } = {};
    if(this.selectedRoute == null) {
      this.selectedRoute = new Route();
      this.selectedRoute.Package = '';
      this.selectedRoute.Func = '';
      this.selectedRoute.Type = '';
      this.selectedRoute.Methods = '';
      this.selectedRoute.Permissions = new Array<RoutePermission>();
      for(var i = 0;i < this.userTypes.length;i++) {
        let routePermission = new RoutePermission();
        routePermission.IDUserType = this.userTypes[i].ID;
        routePermission.UserType = this.userTypes[i];
        this.selectedRoute.Permissions.push(routePermission);
      }
    }
    vett['package'] = new FormControl(this.selectedRoute.Package, Validators.compose([Validators.required]));
    vett['func'] = new FormControl(this.selectedRoute.Func, Validators.compose([Validators.required]));
    vett['type'] = new FormControl(this.selectedRoute.Type, Validators.compose([Validators.required]));
    vett['method'] = new FormControl(this.selectedRoute.Methods, Validators.compose([Validators.required]));
    for(var i = 0;i < this.selectedRoute.Permissions.length;i++) {
      vett[this.selectedRoute.Permissions[i].IDUserType] = new FormControl(this.selectedRoute.Permissions[i].Enabled);
    }
    return this.fb.group(vett);
  }
  onSubmit() {
    this.selectedRoute.Package = this.frmGroup.controls['package'].value;
    this.selectedRoute.Func = this.frmGroup.controls['func'].value;
    this.selectedRoute.Type = this.frmGroup.controls['type'].value;
    this.selectedRoute.Methods = this.frmGroup.controls['method'].value;
    for(var i = 0;i < this.selectedRoute.Permissions.length;i++) {
      this.selectedRoute.Permissions[i].Enabled = this.frmGroup.controls[this.selectedRoute.Permissions[i].IDUserType].value;
    }
    this.saved.emit(this.selectedRoute);
  }

}
