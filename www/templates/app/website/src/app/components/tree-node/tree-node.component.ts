import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss'],
  animations: [
    trigger("openClose", [
      state("open", style({ minHeight: "auto", opacity: 1 })),
      state("closed", style({ height: "0px", opacity: 0, overflow: "hidden" })),
      transition("* => closed", [animate("0.5s")]),
      transition("* => open", [animate("0.5s")])
    ])
  ]
})
export class TreeNodeComponent implements OnInit {

  @Input() title!: string;
  @Input() IsExpanded: boolean = false;
  @Input() Active: boolean = false;
  @Output() expanded = new EventEmitter();
  
  constructor() {
  }

  ngOnInit(): void {
  }

  toggle() {
    this.IsExpanded = !this.IsExpanded;
    this.Active = !this.Active;
    this.expanded.emit(this.IsExpanded.toString());
  }

}
