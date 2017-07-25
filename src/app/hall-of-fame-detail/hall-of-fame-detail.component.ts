import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HallOfFameService } from '../services/hall-of-fame.service';

@Component({
  selector: 'app-hall-of-fame-detail',
  templateUrl: './hall-of-fame-detail.component.html',
  styleUrls: ['./hall-of-fame-detail.component.scss']
})
export class HallOfFameDetailComponent implements OnInit {

  id: number = null;
  dataSet: any = null;

  constructor(private route: ActivatedRoute, private location: Location, private hallOfFameService: HallOfFameService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.id = urlParameters['key'];
    });
    this.dataSet = this.hallOfFameService.getHallOfFameSessionById(this.id);
    this.dataSet.subscribe((d) => {
      console.log(d);
    })
  }

}
