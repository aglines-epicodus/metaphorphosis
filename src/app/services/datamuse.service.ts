import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import * as data from '../assets/seeds.json';

@Injectable()
export class DatamuseService {

  constructor(private http: Http) { }


  getNouns(noun: string) {
    //Rolls whether to use rel_trg. Use holo or hypernyms optionally?
    if (Math.random() > .5) {
      return this.http.get(`http://api.datamuse.com/words?rel_trg=${noun}&max=20`);
    } else {
      return this.http.get(`http://api.datamuse.com/words?ml=${noun}&max=20`);
    }
  }

  getAdjFor(noun: string) {
    return this.http.get(`http://api.datamuse.com/words?rel_jjb=${noun}&max=25&md=p`);
  }

  getDatamuseResponse(selectedWord: string) {
    var seeds = ["animal", "art", "beauty", "game", "love", "meaning", "politics", "work", "peace", "power"];

    var meansLike = this.http.get("http://api.datamuse.com/words?ml=" + selectedWord + "&max=10").subscribe((result) => {
      for (var i=0; i<result.json().length; i++) {
        console.log(selectedWord, "means like: ", result.json()[i].word);

      }
    });
    var relatedTrigger = this.http.get("http://api.datamuse.com/words?rel_trg=" + selectedWord + "&max=10").subscribe((result) => {
      for (var i=0; i<result.json().length; i++) {
        console.log("Related Trigger: ", result.json()[i].word);
      }
    });

    var relatedSpecific = this.http.get("http://api.datamuse.com/words?rel_spc=" + selectedWord + "&max=10").subscribe((result) => {
      for (var i=0; i<result.json().length; i++) {
        console.log("Related Trigger: ", result.json()[i].word);
      }
    });

    var relatedGeneral = this.http.get("http://api.datamuse.com/words?rel_gen=" + selectedWord + "&max=10").subscribe((result) => {
      for (var i=0; i<result.json().length; i++) {
        console.log("More specific kind of", selectedWord,"=", result.json()[i].word);
      }

    });
    var synonyms = this.http.get("http://api.datamuse.com/words?rel_syn=" + selectedWord + "&max=10").subscribe((result) => {
      for (var i=0; i<result.json().length; i++) {
        console.log("Synonym of", selectedWord,"=", result.json()[i].word);
      }
    });

    var antonyms = this.http.get("http://api.datamuse.com/words?rel_ant=" + selectedWord + "&max=10").subscribe((result) => {
      for (var i=0; i<result.json().length; i++) {
        console.log("Opposite of", selectedWord,"=", result.json()[i].word);
      }
    });

    var wholeToPart = this.http.get("http://api.datamuse.com/words?rel_com=" + selectedWord + "&max=10").subscribe((result) => {
      for (var i=0; i<result.json().length; i++) {
        console.log("Whole to part:", result.json()[i].word);
      }
    });

    var partToWhole = this.http.get("http://api.datamuse.com/words?rel_par=" + selectedWord + "&max=10").subscribe((result) => {
      for (var i=0; i<result.json().length; i++) {
        console.log("part to whole:", result.json()[i].word);
      }
    });
    var NounGivenAdj = this.http.get("http://api.datamuse.com/words?rel_jja=" + selectedWord + "&max=10").subscribe((result) => {
      for (var i=0; i<result.json().length; i++) {
        console.log("noun popular with this adj:", result.json()[i].word);
      }
    });
    var AdjGivenNoun = this.http.get("http://api.datamuse.com/words?rel_jjb=" + selectedWord + "&max=10").subscribe((result) => {
      for (var i=0; i<result.json().length; i++) {
        console.log("adj popular with this noun:", result.json()[i].word);
      }
    });
    var frequentFollower = this.http.get("http://api.datamuse.com/words?rel_bga=" + selectedWord + "&max=10").subscribe((result) => {
      for (var i=0; i<result.json().length; i++) {
        console.log("words that often follow the given word:", result.json()[i].word);
      }
    });
    var frequentPreceder = this.http.get("http://api.datamuse.com/words?rel_bgb=" + selectedWord + "&max=10").subscribe((result) => {
      for (var i=0; i<result.json().length; i++) {
        console.log("words that often come before ", selectedWord, result.json()[i].word);
      }
    });
  }
}
