import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slide-top', [
      state('start', style({
        top: '-1000px',
      })),
      state('mid', style({
        top: '40px',
      })),
      state('finish', style({
        top: '0px',
      })),
      transition('start => finish', animate('1000ms ease-out'))
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'Metaphorphosis';
  state: string = 'start';
  animateMe() {
    this.state = (this.state === 'finish' ? 'start' : 'finish');
    console.log(this.state);
  }

  ngOnInit() {

    //TODO: Rewrite animation here to use angular animation modules
    //TODO: Tutorial here: https://coursetro.com/posts/code/63/Angular-4-Animation-Tutorial
    // var el = document.getElementById('text');
    // var newHtml = el.innerHTML;
    // var newerHtml = newHtml.split("");
    // var newestHtml = newerHtml.map(function(letter) {
    //   return '<span class="letter">' + letter + '</span>';
    // }).join("");
    // el.innerHTML = newestHtml;
    //
    // var step = 0;
    // var els = document.getElementsByClassName('letter');
    // var directions = ['top', 'bottom', 'left', 'right'];
    // for (var i = 0; i < els.length; i++) {
    //   (els[i] as HTMLElement).style.animationDelay = step + 's';
    //   step = Math.random() * .4;
    //   els[i].classList.add('animate-' + directions[Math.floor(Math.random() * 4)]);
    // }
  }
}
