import { Component, OnInit } from '@angular/core';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(public service: CommonsService) {
    // super(service);
  }

  ngOnInit(): void {
    if(this.service.isLogged()) {
      this.service.Logout();
    }
    let path = "/";
    setTimeout(() => this.service.Redirect(path), 1000);
  }

}
