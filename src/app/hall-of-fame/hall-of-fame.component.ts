import { Component, OnInit } from '@angular/core';
import { HallOfFameService } from '../services/hall-of-fame.service';

@Component({
  selector: 'app-hall-of-fame',
  templateUrl: './hall-of-fame.component.html',
  styleUrls: ['./hall-of-fame.component.scss']
})
export class HallOfFameComponent implements OnInit {
  list: any;

  constructor(private hallOfFameService: HallOfFameService) {

  }

  ngOnInit() {
    this.list = this.hallOfFameService.getHallOfFameList();
  }

  determineClicked(item) {
    console.log();
    if (item.sessions[item.sessions.length - 1].counter !== 0) {
      return 'clicked';
    } else {
      return 'unclicked';
    }
  }

  clickIcon(item) {
    if (item.clicked) {
      item.clicked = false;
    } else {
      item.clicked = true;
    }
  }

  saveUpdate(item) {
    this.hallOfFameService.saveUpdate(item);
  }
}