import { Pipe, PipeTransform } from '@angular/core';
import { EachDay } from '../Class/EachDay'
@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(items: EachDay[], date: Date | null): any {
    if (!items || !date) {
      return items;
    } else {
      date = new Date(date)
      return items.filter(item => date && item.date.getFullYear() == date.getFullYear() &&
        item.date.getMonth() == date.getMonth() &&
        item.date.getDate() == date.getDate())
    }
  }

}
