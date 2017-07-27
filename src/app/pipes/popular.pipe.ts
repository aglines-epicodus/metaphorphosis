import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'popular'
})
export class PopularPipe implements PipeTransform {

  transform(value: any, filter: string, page: number): any {
    if (value !== null) {

      var startingIndex: number;
      var result: any[] = null;
      var resultToReturn: any[] = [];

      if (filter === 'popular') {
        result = value.sort(function(a,b) {
          return b.counter - a.counter;
        });
      }
      if (filter === 'recent') {
        result = value.sort(function(a,b) {
          return b.refId - a.refId;
        });
      }

      if (page === 1) {
        startingIndex = 0;
      } else {
        startingIndex = 20 * (page - 1);
      }

      for (var i = startingIndex; i < page * 20; i++) {
        if (result[i]) {
          resultToReturn.push(result[i]);
        }
      }

      return resultToReturn;
    }






  }
}
