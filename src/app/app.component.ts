import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slide-mobile', [
      state('start', style({
        right: '-200px',
      })),
      state('finish', style({
        right: '0px',
      })),
      transition('start <=> finish', animate('500ms ease-in-out'))
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'Metaphorphosis';
  state: string = 'start';

  animateMe() {
    if (this.state === "start") {
      this.state = 'finish';
    } else {
      this.state = 'start';
    }
  }

  // toggleMobile() {
  //   console.log(this.mobileShown);
  //   if (this.mobileShown === 'true') {
  //     this.mobileShown = 'false';
  //   } else if (this.mobileShown === 'false' || this.mobileShown === 'neither'){
  //     this.mobileShown = 'true';
  //   } else {
  //     this.mobileShown = 'neither';
  //   }
  // }
  //
  // checkMobileVisibility() {
  //   if (this.mobileShown === 'true') {
  //     return 'slide-mobile-in';
  //   } else if (this.mobileShown === 'false'){
  //     return 'slide-mobile-out'
  //   } else {
  //     return '';
  //   }
  //
  // }

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
