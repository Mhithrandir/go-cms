import { Component, Input, OnInit } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input() title!: string;
  public active: boolean = false;
  
  constructor(tabs:TabsComponent) {
    tabs.addTab(this);
  }

  ngOnInit(): void {
  }

}
