import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class DatamuseService {

  constructor(private http: Http) { }

  getDatamuseResponse() {

    var selectedWord = "playfulness";

    var meansLike = this.http.get("http://api.datamuse.com/words?ml=" + selectedWord + "&max=10").subscribe((result) => {
      for (var i=0; i<result.json().length; i++) {
        console.log(selectedWord, "means like: ", result.json()[i].word);
      }
      // console.log("Means Like: ", result.json()[0].word);
    });
    var relatedTrigger = this.http.get("http://api.datamuse.com/words?rel_trg=" + selectedWord + "&max=10").subscribe((result) => {
      for (var i=0; i<result.json().length; i++) {
        console.log("Related Trigger: ", result.json()[i].word);
      }
      // console.log("Related Trigger: ", result.json());
    });

    var relatedSpecific = this.http.get("http://api.datamuse.com/words?rel_spc=" + selectedWord + "&max=10").subscribe((result) => {
      for (var i=0; i<result.json().length; i++) {
        console.log("Related Trigger: ", result.json()[i].word);
      }
      // console.log("This is a kind of that: ", result.json());
    });

    var relatedGeneral = this.http.get("http://api.datamuse.com/words?rel_gen=" + selectedWord + "&max=10").subscribe((result) => {
      for (var i=0; i<result.json().length; i++) {
        console.log("More specific kind of", selectedWord,"=", result.json()[i].word);
      }
      // console.log("This is a general thing and here is a specific kind of this: ", result.json());
    });
    var synonyms = this.http.get("http://api.datamuse.com/words?rel_syn=" + selectedWord + "&max=10").subscribe((result) => {
      for (var i=0; i<result.json().length; i++) {
        console.log("Synonym of", selectedWord,"=", result.json()[i].word);
      }
      // console.log("synonyms: ", result.json());
    });

    var antonyms = this.http.get("http://api.datamuse.com/words?rel_ant=" + selectedWord + "&max=10").subscribe((result) => {
      for (var i=0; i<result.json().length; i++) {
        console.log("Opposite of", selectedWord,"=", result.json()[i].word);
      }
      // console.log("opposite ", result.json());
    });

    var partWhole = this.http.get("http://api.datamuse.com/words?rel_com=" + selectedWord + "&max=10").subscribe((result) => {
      for (var i=0; i<result.json().length; i++) {
        console.log("Related and comprises:", result.json()[i].word);
      }
      // console.log("related and comprises: ", result.json());
    });
  }

}
