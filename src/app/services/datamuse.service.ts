import { Injectable } from '@angular/core';


@Injectable()
export class DatamuseService {

  constructor() { }



// datamuse example, simplest
getDatamuseResponse() {
  var result = datamuse.request('words?sp=politics&md=s&max=2');
  console.log(result);
}
}
