import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { DatamuseService} from '../services/datamuse.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [
    trigger('left', [
      transition(':enter', animate('2000ms ease-in-out', keyframes([
        style({left: '-25px', opacity:0, offset: 0}),
        style({left: '50px', opacity:.5, offset: .5}),
        style({left: '0', opacity:1, offset: 1}),
      ])))
    ]),
    trigger('right', [
      transition(':enter', animate('2000ms ease-in-out', keyframes([
        style({right: '-25px', opacity:0, offset: 0}),
        style({right: '50px', opacity:.5, offset: .5}),
        style({right: '0', opacity:1, offset: 1}),
      ])))
    ]),
    trigger('top', [
      transition(':enter', animate('2000ms ease-in-out', keyframes([
        style({top: '-25px', opacity:0, offset: 0}),
        style({top: '50px', opacity:.5, offset: .5}),
        style({top: '0', opacity:1, offset: 1}),
      ])))
    ]),
    trigger('bottom', [
      transition(':enter', animate('2000ms ease-in-out', keyframes([
        style({bottom: '-25px', opacity:0, offset: 0}),
        style({bottom: '50px', opacity:.5, offset: .5}),
        style({bottom: '0', opacity:1, offset: 1}),
      ])))
    ]),
  ]
})
export class LandingPageComponent implements OnInit, AfterViewChecked {
  state: string = 'start';

  constructor() { }

  ngAfterViewChecked() {
    // this.state = 'finish';
  }

  ngOnInit() {


  }

  triggerAnimation() {
    this.state = 'finish';
  }

}


/*
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
*/
