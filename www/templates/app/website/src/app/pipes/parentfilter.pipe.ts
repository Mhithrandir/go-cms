import { Pipe, PipeTransform } from '@angular/core';
import { Location } from 'src/app/classes/location';

@Pipe({
  name: 'parentfilter'
})
export class ParentfilterPipe implements PipeTransform {

  transform(value: Array<Location>, idparent: number): Array<Location> {
    return value.filter(l => l.IDParent == idparent);
  }

}
