import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/classes/character';
import { DialogType } from 'src/app/classes/dialog-type';
import { BaseComponent } from 'src/app/components/base/base.component';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent extends BaseComponent implements OnInit {

  constructor(service: CommonsService) { super(service); }

  ngOnInit(): void {
    this.service.Get("character", "getcharacters").subscribe((result: Object) => {
      this.records = this.service.FormatResponse(result).Data;
    }, (error) => {
      this.HandleError(error);
    }, () => {
      return this.records;
    });
  }

  Edit(character: Character) {
    this.selectedRecord = character;
    this.dialogType = DialogType.Edit;
  }
}
