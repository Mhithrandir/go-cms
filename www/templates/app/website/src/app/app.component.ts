import { Component, Inject, OnInit } from '@angular/core';
import { BaseComponent } from './components/base/base.component';
import { CommonsService } from './services/commons.service';
import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DialogType } from './classes/dialog-type';
import { DeleteRequest } from './classes/delete-request';
import { MenuItem } from './classes/menu-item';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger("showError", [
      state("open", style({ minHeight: "auto", opacity: 1 })),
      state("closed", style({ height: "0px", opacity: 0, overflow: "hidden" })),
      transition("* => closed", [animate("0.5s")]),
      transition("* => open", [animate("0.5s")])
    ])
  ]
})
export class AppComponent extends BaseComponent implements OnInit {
  
  public error!: Error | any;

  constructor(service: CommonsService, private router: Router, @Inject(DOCUMENT) private document: Document) { super(service); }

  ngOnInit() {
    let menuName = "MainMenuFe";
    this.service.OnError.subscribe((_error: Error) => {
      this.error = _error;
      window.setTimeout(() => {
        this.error = null;
      }, 5000);
    });
    this.service.OnShowDeleteDialog.subscribe((request: DeleteRequest) => {
      this.dialogType = DialogType.Delete;
      this.selectedRecord = request;
    });
    this.router.events.subscribe((event: Object) => {
        if(!this.router.url.startsWith("/be")) {
          this.loadStyle('./styles/frontend.css');
        }
        else {
          this.loadStyle('');
        }
        if (event instanceof NavigationError) {
            this.HandleError(event.error);
        }

        if (event instanceof NavigationEnd) {
            //do something on end activity
            if(event.url.startsWith("/be")) {
              menuName = "MainMenuBe";
            }
            else {
              menuName = "MainMenuFe";
            }
            //Load the correct menu based on the route
            this.service.Get("menu", "getMenu?menuName=" + menuName).subscribe((result: Object) => {
              let temp = this.service.FormatResponse(result).Data;
              if((this.records == null) || (temp.length != this.records.length)) {
                this.records = temp;
              } 
              else {
                for(let i= 0; i < temp.length; i++) {
                  if(!this.Equals(temp[i], this.records[i])) {
                    this.records = temp;
                    break;
                  }
                }
              }
            }, (error) => {
              this.HandleError(error);
            }, () => {
              return this.records;
            });
        }
    });
  }
  closeError() {
    this.error = null;
  }

  Equals(first: MenuItem, m: MenuItem): boolean {
    if((first == null) || (m == null)) return false;
    if((first.MenuName != m.MenuName) || (first.Name != m.Name) || (first.Parent != m.Parent) || (first.IDRoute != m.IDRoute) || (first.MenuOrder != m.MenuOrder) || ((first.Childrens != null) && (m.Childrens != null) && (first.Childrens.length != m.Childrens.length))) {
        return false;
    }
    if((first.Childrens != null) && (m.Childrens != null)) {
      for(let i= 0; i < first.Childrens.length; i++) {
          if(!this.Equals(first.Childrens[i], m.Childrens[i])) {
              return false;
          }
      }
    }
    return true;
  }
  loadStyle(styleName: string) {
    const head = this.document.getElementsByTagName('head')[0];
  
    let themeLink = this.document.getElementById(
      'frontend-theme'
    ) as HTMLLinkElement;
    if(styleName != '') {
      if ((themeLink) && (themeLink.href != styleName)) {
        themeLink.href = styleName;
      }
      else {
        const style = this.document.createElement('link');
        style.id = 'frontend-theme';
        style.rel = 'stylesheet';
        style.href = `${styleName}`;
        head.appendChild(style);
      }
    }
    else {
      if (themeLink) {
        head.removeChild(themeLink);
      }
    }
  }
}
