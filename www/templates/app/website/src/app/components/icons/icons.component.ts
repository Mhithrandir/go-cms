import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  private icons: { [key: string]: string; } = {
    plus: "<svg xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" viewBox=\"0 0 100 100\"><path d=\"M56 8c0-1.656-1.344-3-3-3h-6c-1.656 0-3 1.344-3 3v84c0 1.656 1.344 3 3 3h6c1.656 0 3-1.344 3-3V8Z\"/><path d=\"M92 56c1.656 0 3-1.344 3-3v-6c0-1.656-1.344-3-3-3H8c-1.656 0-3 1.344-3 3v6c0 1.656 1.344 3 3 3h84Z\"/></svg>",
    delete: "<svg xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" viewBox=\"0 0 100 100\"><path d=\"M21 29c.085-.394 58.229-.352 58 0-.229.352-6 68-6 68H27s-6.085-67.606-6-68ZM20.999 22h58.002v3H20.999zM40 17h20v5H40z\"/><path fill=\"#84c6ff\" d=\"M54 36a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v55a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V36ZM38 36a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v55a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V36ZM70 36a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v55a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V36Z\"/></svg>",
    up: "<svg xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" viewBox=\"0 0 100 100\"><path d=\"M53.363 27.372a3.001 3.001 0 0 0-4.242 0l-4.243 4.243a3.001 3.001 0 0 0 0 4.243l36.77 36.77a3.001 3.001 0 0 0 4.242 0l4.243-4.243a3.001 3.001 0 0 0 0-4.243l-36.77-36.77Z\"/><path d=\"M55.122 35.858a3.001 3.001 0 0 0 0-4.243l-4.243-4.242a3.001 3.001 0 0 0-4.242 0l-36.77 36.77a3.001 3.001 0 0 0 0 4.242l4.243 4.242a3.001 3.001 0 0 0 4.242 0l36.77-36.77Z\"/></svg>",
    down: "<svg xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" viewBox=\"0 0 100 100\"><path d=\"M46.637 72.628a3.001 3.001 0 0 0 4.242 0l4.243-4.243a3.001 3.001 0 0 0 0-4.243l-36.77-36.77a3.001 3.001 0 0 0-4.242 0l-4.243 4.243a3.001 3.001 0 0 0 0 4.243l36.77 36.77Z\"/><path d=\"M44.878 64.142a3.001 3.001 0 0 0 0 4.243l4.243 4.242a3.001 3.001 0 0 0 4.242 0l36.77-36.77a3.001 3.001 0 0 0 0-4.242l-4.243-4.242a3.001 3.001 0 0 0-4.242 0l-36.77 36.77Z\"/></svg>",
    points: "<svg xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" fill-rule=\"evenodd\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" clip-rule=\"evenodd\" viewBox=\"0 0 100 100\"><ellipse cx=\"23.5\" cy=\"58\" rx=\"10.5\" ry=\"8\" transform=\"matrix(1.42857 0 0 1.875 16.429 -73.75)\"/><ellipse cx=\"23.5\" cy=\"58\" rx=\"10.5\" ry=\"8\" transform=\"matrix(1.42857 0 0 1.875 -13.571 -43.75)\"/><ellipse cx=\"23.5\" cy=\"58\" rx=\"10.5\" ry=\"8\" transform=\"matrix(1.42857 0 0 1.875 46.429 -43.75)\"/></svg>",
  };
  @Input() set name(iconName: string) {
    this.element.nativeElement.innerHTML = this.icons[iconName];
  }
  constructor(private element: ElementRef) { }

  ngOnInit(): void {
  }

}
