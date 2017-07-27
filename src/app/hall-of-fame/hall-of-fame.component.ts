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
  filter: string = 'popular';
  page: number = 1;
  listLength: number;
  pages: number[] = [];

  constructor(private hallOfFameService: HallOfFameService, private displayListService: DisplayListService) {

  }

  ngOnInit() {
    this.list = this.displayListService.getList();
    this.list.subscribe((list) => {
      this.listLength = list.length;
      for (var i = 0; i < Math.ceil(this.listLength / 20); i++) {
        this.pages.push(i);
      }
    });
  }

  setFilterType(type: string) {
    this.filter = type;
  }

  showNext() {
    if (!this.listLength) {
      return true;
    } else {
      if (this.page >= Math.ceil(this.listLength / 20)) {
        return false;
      } else {
        return true;
      }
    }
  }

  showPrevious() {
    return this.page !== 1;
  }

  setPage(page) {
    this.page = page;
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
