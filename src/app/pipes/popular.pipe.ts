import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'popular'
})
export class PopularPipe implements PipeTransform {

  transform(value: any): any {
    if (value !== null) {
      value.sort(function(a,b) {
        return b.counter - a.counter;
      })
      return value;
    }
  }

}
