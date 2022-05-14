import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.scss']
})
export class ExpanderComponent implements OnInit {

  @Input() IsExpanded!: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  Expanded() {
    this.IsExpanded = !this.IsExpanded;
  }
}
