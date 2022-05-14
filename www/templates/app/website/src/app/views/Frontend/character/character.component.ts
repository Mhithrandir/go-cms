import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SheetElement, SheetElementValue } from 'src/app/classes/sheet-element';
import { BaseComponent } from 'src/app/components/base/base.component';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent extends BaseComponent implements OnInit {

  public stepCreation: number = -1;
  public races!: Array<SheetElement>;
  public classes!: Array<SheetElement>;
  public abilities!: Array<SheetElement>;
  public skills!: Array<SheetElement>;
  public bundles!: Array<SheetElement>;
  public frmGroup!: FormGroup;
  public points: number = 3000;
  public scheda!: { [key: string]: any; };
  constructor(service: CommonsService, private fb: FormBuilder) { super(service); }

  ngOnInit(): void {
    this.error = '';
    // this.choices = new Array<SheetElement>();
    this.service.Get("character", "getminecharacters").subscribe((result: Object) => {
      this.records = this.service.FormatResponse(result).Data;
    }, (error) => {
      this.HandleError(error);
    });
  }
  StepChanged($event: any) {
    this.stepCreation = $event.step;
    this.scheda = $event.scheda;
    this.scheda["Abilities"].forEach((a: SheetElementValue) => {
      this.scheda["Skills"].forEach((s: SheetElement) => {
        if(s.IDReferenceSheetElement == a.Element.ID) {
          s.Enabled = (a.Value > 0);
        }
      });
    });
    this.scheda["Skills"].forEach((a: SheetElementValue) => {
      this.bundles.forEach((s: SheetElement) => {
        s.AbilitatedForSheetElement.forEach((elem: SheetElement) => {
          let res = this.CheckBundleAbilitation(elem.Name);
          if(res) {
            this.scheda["Bundles"].push(new SheetElementValue(s, true));
          }
        });
        if(s.IDReferenceSheetElement == a.Element.ID) {
          s.Enabled = (a.Value > 0);
        }
      });
    });
  }

  CheckBundleAbilitation(name: string): boolean {
    for(var key in this.scheda) {
      if(key == "Bundles") continue;
      if((this.scheda[key].Element != null) && (this.scheda[key].Element.Name != null)) {
        if (this.scheda[key].Element.Name == name)  {
          return (this.scheda[key].Value > 0);
        }
      } else {
        for(var subkey in this.scheda[key]) {
          if (this.scheda[key][subkey].Element.Name == name)  {
            return (this.scheda[key][subkey].Value > 0);
          }
        }
      }
    }
    return false;
  }

  BeginCreation() {
    this.scheda = {};
    this.scheda["Points"] = new SheetElementValue(new SheetElement(), 3000);
    this.scheda["Points"].Element.Name = "Points";
    this.scheda["Race"] = new Array<SheetElementValue>();
    this.scheda["Class"] = new Array<SheetElementValue>();
    this.scheda["Abilities"] = new Array<SheetElementValue>();
    this.scheda["Skills"] = new Array<SheetElementValue>();
    this.scheda["Bundles"] = new Array<SheetElementValue>();
    this.scheda["Info"] = new Array<SheetElementValue>();
    let s = new SheetElement();
    s.Name = "Name"
    this.scheda['Info'].push(new SheetElementValue(s, ""));
    s = new SheetElement();
    s.Name = "Image"
    this.scheda['Info'].push(new SheetElementValue(s, ""));
    s = new SheetElement();
    s.Name = "Prestavolto"
    this.scheda['Info'].push(new SheetElementValue(s, ""));
    s = new SheetElement();
    s.Name = "Background"
    this.scheda['Info'].push(new SheetElementValue(s, ""));
    // this.scheda["info"]["Name"] = new SheetElementValue(new SheetElement(), "");
    // this.scheda["info"]["Image"] = new SheetElementValue(new SheetElement(), "");
    // this.scheda["info"]["Prestavolto"] = new SheetElementValue(new SheetElement(), "");
    // this.scheda["info"]["Background"] = new SheetElementValue(new SheetElement(), "");
    this.stepCreation = 0;
    this.service.Get("sheetelement", "getsheetelements?type=race").subscribe((result: Object) => {
      this.races = this.service.FormatResponse(result).Data;
    }, (error) => {
      this.HandleError(error);
    });
    this.service.Get("sheetelement", "getsheetelements?type=class").subscribe((result: Object) => {
      this.classes = this.service.FormatResponse(result).Data;
    }, (error) => {
      this.HandleError(error);
    });
    this.service.Get("sheetelement", "getsheetelements?type=ability").subscribe((result: Object) => {
      this.abilities = this.service.FormatResponse(result).Data;
      this.abilities.forEach((a: SheetElement) => {
        this.scheda["Abilities"].push(new SheetElementValue(a, a.Min));
      });
    }, (error) => {
      this.HandleError(error);
    });
    this.service.Get("sheetelement", "getsheetelements?type=skill").subscribe((result: Object) => {
      this.skills = this.service.FormatResponse(result).Data;
      this.skills.forEach((a: SheetElement) => {
        this.scheda["Skills"].push(new SheetElementValue(a, a.Min));
      });
    }, (error) => {
      this.HandleError(error);
    });
    this.service.Get("sheetelement", "getsheetelements?type=optionals bundle").subscribe((result: Object) => {
      this.bundles = this.service.FormatResponse(result).Data;
      this.bundles.forEach((a: SheetElement) => {
        this.scheda["Bundles"].push(new SheetElementValue(a, a.Min));
      });
    }, (error) => {
      this.HandleError(error);
    });
  }

  CancelCreation() {
    this.stepCreation = -1;
    // this.choices = new Array<SheetElement>();
  }
  Saved($event: { [key: string]: any; }) {
    this.scheda = $event;
    //check if name and prestanome already exist in the database
    this.service.Get("character", "check?fieldName=Name&value=" + this.scheda["Info"][this.GetSheetElementInfoIndex("Name")].Value).subscribe((result: Object) => {
      let response = this.service.FormatResponse(result).Data;
      if(!response) {
        this.service.Get("character", "check?fieldName=LendFace&value=" + this.scheda["Info"][this.GetSheetElementInfoIndex("Prestavolto")].Value).subscribe((result: Object) => {
          let response = this.service.FormatResponse(result).Data;
          if(!response) {
            console.log(this.scheda);
            this.service.Post("character", "add", this.scheda).subscribe((result: Object) => {
              let response = this.service.FormatResponse(result).Data;
              console.log(response);
            }, (error) => {
              this.HandleError(error);
            });
          }
        }, (error) => {
          this.HandleError(error);
        });
      }
    }, (error) => {
      this.HandleError(error);
    });
    // if(this.stepCreation == 2) {
    //   //salvo i valori di abilità
    //   this.scheda["abilities"] = {};
    //   this.abilities.forEach((a: SheetElement) => {
    //     this.scheda["abilities"][a.ID.toString()] = this.frmGroup.controls[a.ID.toString()].value;
    //   });
    // }
    // if(this.stepCreation == 3) {
    //   //salvo i valori di skills
    //   this.scheda["skills"] = {};
    //   this.skills.forEach((a: SheetElement) => {
    //     this.scheda["skills"][a.ID.toString()] = this.frmGroup.controls[a.ID.toString()].value;
    //   });
    // }
    // if(this.stepCreation == 4) {
    //   //salvo i valori di skills
    //   this.scheda["bundles"] = {};
    //   this.bundles.forEach((a: SheetElement) => {
    //     if(this.frmGroup.controls[a.ID.toString()].value != null) {
    //       this.scheda["bundles"][a.ID.toString()] = this.frmGroup.controls[a.ID.toString()].value;
    //     }
    //     else {
    //       this.scheda["bundles"][a.ID.toString()] = false;
    //     }
    //   });
    // }
    // this.stepCreation++;
    // this.SetForms();
  }
  GetSheetElementInfoIndex(name: string) {
    for (let i = 0; i < this.scheda['Info'].length; i++) {
      if(this.scheda['Info'][i].Element.Name == name) {
        return i;
      }
    }
    return -1
  }
}
