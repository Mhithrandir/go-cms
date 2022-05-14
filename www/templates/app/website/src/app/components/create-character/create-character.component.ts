import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SheetElement, SheetElementValue } from 'src/app/classes/sheet-element';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.scss']
})
export class CreateCharacterComponent implements OnInit {

  @Input() races!: Array<SheetElement>;
  @Input() classes!: Array<SheetElement>;
  @Input() stepCreation!: number;
  @Input() scheda!: { [key: string]: any; };
  @Output() stepChanged = new EventEmitter();
  @Output() saved = new EventEmitter();
  public error!: string;
  constructor() { }

  ngOnInit(): void {
    this.error = "";
  }

  AbilitiesChanged(r: Array<SheetElementValue>) {
    r.forEach((v: SheetElementValue) => {
      this.scheda["Abilities"][this.scheda["Abilities"].indexOf(v)].Value = v.Value;
    });
    this.CalculatePoints();
  }
  SkillsChanged(r: Array<SheetElementValue>) {
    r.forEach((v: SheetElementValue) => {
      this.scheda["Skills"][this.scheda["Skills"].indexOf(v)].Value = v.Value;
    });
    this.CalculatePoints();
  }
  BundlesChanged(r: Array<SheetElementValue>) {
    r.forEach((v: SheetElementValue) => {
      this.scheda["Bundles"][this.scheda["Bundles"].indexOf(v)].Value = v.Value;
    });
    this.CalculatePoints();
  }
  CalculatePoints() {
    this.error = "";
    this.scheda["Points"].Value = 3000;

    this.scheda["Abilities"].forEach((a: SheetElementValue) => {
      if((a.Value < a.Element.Min) || (a.Value > a.Element.Max)) {
        this.error += a.Element.Name + " deve essere compreso tra " + a.Element.Min.toString() + " e " + a.Element.Max.toString() + ", ";
      }
      this.scheda["Points"].Value -= a.Value * a.Value * a.Element.Cost;
    });
    this.scheda["Skills"].forEach((a: SheetElementValue) => {
      if((a.Value < a.Element.Min) || (a.Value > a.Element.Max)) {
        this.error += a.Element.Name + " deve essere compreso tra " + a.Element.Min.toString() + " e " + a.Element.Max.toString() + ", ";
      }
      this.scheda["Points"].Value -= a.Value * a.Value * a.Element.Cost;
    });
    this.scheda["Bundles"].forEach((a: SheetElementValue) => {
      if(a.Value) {
        this.scheda["Points"].Value -= a.Element.Cost;
      }
    });
    if(this.scheda["Points"].Value < 0) {
      this.error += "Troppi punti spesi!, ";
    }
  }
  Back() {
    this.stepCreation--;
    this.stepChanged.emit({ step: this.stepCreation, scheda: this.scheda });
  }
  Select(name: string, r: SheetElement) {
    this.scheda[name] = new SheetElementValue(r, r.Name);
    this.Next();
  }
  Next() {
    this.stepCreation++;
    this.stepChanged.emit({ step: this.stepCreation, scheda: this.scheda });
  }
  CancelCreation() {
    this.stepCreation = -1;
    this.stepChanged.emit({ step: this.stepCreation, scheda: this.scheda });
  }
  Save($event: { [key: string]: any; }) {
    this.scheda = $event;
    this.saved.emit(this.scheda);
  }
}
