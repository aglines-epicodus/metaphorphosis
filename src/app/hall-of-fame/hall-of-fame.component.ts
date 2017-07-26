import { Component, OnInit } from '@angular/core';
import { HallOfFameService } from '../services/hall-of-fame.service';
import { DisplayListService } from '../services/display-list.service';

@Component({
  selector: 'app-hall-of-fame',
  templateUrl: './hall-of-fame.component.html',
  styleUrls: ['./hall-of-fame.component.scss']
})
export class HallOfFameComponent implements OnInit {
  list: any;

  constructor(private hallOfFameService: HallOfFameService, private displayListService: DisplayListService) {

  }

  ngOnInit() {
    this.list = this.displayListService.getList();
  }

  determineClicked(item) {
    if (item.counter !== 0) {
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
    this.displayListService.saveUpdate(item);
  }

  findDetail(refId) {
    this.hallOfFameService.findDetail(refId);
  }
}
