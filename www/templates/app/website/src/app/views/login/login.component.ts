import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PkgResponse } from 'src/app/classes/pkg-response';
import { Token } from 'src/app/classes/token';
import { BaseComponent } from 'src/app/components/base/base.component';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {

  public frmGroup!: FormGroup;
  public passVisible!: boolean;
  public passType: string = "password";
  constructor(public service: CommonsService, private fb: FormBuilder) {
    super(service);
  }

  ngOnInit(): void {
    this.frmGroup = this.createForm();
    if(this.service.isLogged()) {
      let path = "/";
      setTimeout(() => this.service.Redirect(path), 1000);
    }
  }
  createForm(): FormGroup {
    return this.fb.group(
        {
          username: [ "", Validators.compose([Validators.required, Validators.email]) ],
          password: [ "", Validators.compose([Validators.required]) ],
        }
    );
  }
  onSubmit() {
    let credentials = "{ \"Username\": \"" + this.frmGroup.controls['username'].value + "\", \"Password\": \"" + this.frmGroup.controls['password'].value + "\" }";
    this.frmGroup.controls['password'].setValue("");
    this.service.Post("user", "login", credentials).subscribe((result: Object) => {
      let pkgRespone = new PkgResponse(result);
      let app: any = pkgRespone.Data;
      this.service.setToken((app as Token));
      location.reload();
    }, (error) => {
      this.HandleError(error);
    }, () => {
      this.service.Redirect("/");
    });
  }
  SetPasswordVisible($event: boolean){
    this.passVisible = !this.passVisible;
    if(this.passVisible){
      this.passType = "text";
    }
    else{
      this.passType = "password";
    }
  }
}
