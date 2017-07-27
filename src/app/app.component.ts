import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { AuthService } from './services/auth.service';

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
  isLoggedIn: boolean = false;
  user;

  constructor(private auth: AuthService) {
    this.auth.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
      }
    });
  }

  animateMe() {
    if (this.state === "start") {
      this.state = 'finish';
    } else {
      this.state = 'start';
    }
  }

  ngOnInit() {
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }
}
