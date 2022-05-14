import { Component, OnInit } from '@angular/core';
import { LogItem } from 'src/app/classes/log-item';
import { BaseComponent } from 'src/app/components/base/base.component';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent extends BaseComponent implements OnInit {

  public logItems!: Array<LogItem>;

  constructor(service: CommonsService) { super(service); }

  ngOnInit(): void {
    this.service.Get("logs", "getlogs").subscribe((result: Object) => {
      this.records = this.service.FormatResponse(result).Data;
    });
  }

  Expanded(d: string) {
    this.service.Get("logs", "getlog?name=" + d).subscribe((content: Object) => {
          let app = JSON.parse(this.service.FormatResponse(content).Data);
          this.logItems = new Array<LogItem>();
          app.forEach((element: any) => {
            let l = new LogItem(element);
            this.logItems.push(l);
          });
      });
  }
}
