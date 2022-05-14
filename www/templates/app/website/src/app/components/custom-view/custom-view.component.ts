import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditorElement } from 'src/app/classes/editor-element';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-custom-view',
  templateUrl: './custom-view.component.html',
  styleUrls: ['./custom-view.component.scss']
})
export class CustomViewComponent implements OnInit {

  @Input() element!: EditorElement;
  @Input() preview!: boolean;
  constructor(private router: Router, private service: CommonsService) { }

  ngOnInit(): void {
    //Get custom views
    let prefix = "";
    console.log(this.router.url);
    if(!this.router.url.startsWith("/be")) {
      prefix = "fe/";
    }
    // switch(this.router.url) {
    //   case "/be/home":
    //     break;
    //   case "/home":
    //     break;
    // }
    if(!this.preview) {
      this.service.Get("component", "getcomponent?url=" + prefix + this.router.url.substring(1)).subscribe((result: Object) => {
        this.element = this.service.FormatResponse(result).Data[0];
        console.log(this.element);
      }, (error) => {
        
      });
    }
  }
}
