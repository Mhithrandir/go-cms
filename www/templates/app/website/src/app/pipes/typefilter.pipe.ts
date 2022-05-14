import { Pipe, PipeTransform } from '@angular/core';
import { Equip } from '../classes/equip';

@Pipe({
  name: 'typefilter'
})
export class TypefilterPipe implements PipeTransform {

  transform(value: Array<Equip>, typename: string): Array<Equip> {
    return value.filter(eq => eq.Type.Name == typename);
  }

}
