import { Injectable } from '@angular/core';
// import { Datamuse } from 'datamuse';
import { Http, Response } from '@angular/http';


@Injectable()
export class DatamuseService {

  constructor(private http: Http) { }

// Lets see what we CAN get back - a quick review of Datamuse options

getDatamuseResponseMeansLike() {
    var result = this.http.get("http://api.datamuse.com/words?ml=politics&max=10").subscribe((result) => {
      console.log("Means Like: ", result.json());
    });
  }
getDatamuseResponseRelatedTrigger() {
    var result = this.http.get("http://api.datamuse.com/words?rel_trg=politics&max=10").subscribe((result) => {
      console.log("Related Trigger: ", result.json());
    });
  }

getDatamuseResponseRelatedSpecific() {
    var result = this.http.get("http://api.datamuse.com/words?rel_spc=politics&max=10").subscribe((result) => {
      console.log("This is a kind of that: ", result.json());
    });
  }

getDatamuseResponseRelatedGeneral() {
    var result = this.http.get("http://api.datamuse.com/words?rel_gen=politics&max=10").subscribe((result) => {
      console.log("This is a general thing and here is a specific kind of this: ", result.json());
    });
  }

getDatamuseResponseRelatedSyn() {
    var result = this.http.get("http://api.datamuse.com/words?rel_syn=politics&max=10").subscribe((result) => {
      console.log("synonyms: ", result.json());
    });
  }

getDatamuseResponseRelatedAnt() {
    var result = this.http.get("http://api.datamuse.com/words?rel_ant=politics&max=10").subscribe((result) => {
      console.log("opposite ", result.json());
    });
  }
getDatamuseResponseRelatedComprises() {
    var result = this.http.get("http://api.datamuse.com/words?rel_com=politics&max=10").subscribe((result) => {
      console.log("related and comprises: ", result.json());
    });
  }


}
