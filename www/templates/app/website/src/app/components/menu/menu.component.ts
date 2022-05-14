import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../classes/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger("openClose", [
      state("open", style({ minHeight: "auto", opacity: 1 })),
      state("closed", style({ height: "0px", opacity: 0, overflow: "hidden" })),
      transition("* => closed", [animate("0.5s")]),
      transition("* => open", [animate("0.5s")])
    ])
  ]
})
export class MenuComponent implements OnInit {

  @Input() menu!: Array<MenuItem>;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(item: MenuItem) {
    item.IsExpanded = !item.IsExpanded;
  }
}
