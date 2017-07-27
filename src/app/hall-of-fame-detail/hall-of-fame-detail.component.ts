import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HallOfFameService } from '../services/hall-of-fame.service';

@Component({
  selector: 'app-hall-of-fame-detail',
  templateUrl: './hall-of-fame-detail.component.html',
  styleUrls: ['./hall-of-fame-detail.component.scss']
})
export class HallOfFameDetailComponent implements OnInit, AfterViewChecked {

  id: number = null;
  dataSet: any = null;
  drawn = false;

  constructor(private route: ActivatedRoute, private location: Location, private hallOfFameService: HallOfFameService) { }

  ngAfterViewChecked() {
    if (this.drawn === false) {
      for (var i = 0; i < document.getElementsByClassName('selected').length - 1; i++) {
        var container = document.getElementById('content');
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        var elOne = <HTMLElement>document.getElementsByClassName('selected')[i];
        var elTwo = <HTMLElement>document.getElementsByClassName('selected')[i+1];

        var coordsOne = {
          x: elOne.offsetLeft + (elOne.offsetWidth / 2),
          y: elOne.offsetTop + (elOne.offsetHeight / 2)
        }
        var coordsTwo = {
          x: elTwo.offsetLeft + (elTwo.offsetWidth / 2),
          y: elTwo.offsetTop + (elTwo.offsetHeight / 2)
        }

        var width = (coordsTwo.x - coordsOne.x).toString();
        if (width === '0') {
          width = '1';
        }
        var height = (coordsTwo.y - coordsOne.y).toString();

        if (parseInt(width) < 0) {
          width = width.slice(1, width.length);
          line.setAttribute('x1', width);
          line.setAttribute('y1', '0');
          line.setAttribute('x2', '0');
          line.setAttribute('y2', height);
          svg.setAttribute('style', `position: absolute; top:${coordsOne.y}; left: ${coordsTwo.x}; z-index: -1`);
        } else {
          line.setAttribute('x1', '0');
          line.setAttribute('y1', '0');
          line.setAttribute('x2', width);
          line.setAttribute('y2', height);
          svg.setAttribute('style', `position: absolute; top:${coordsOne.y}; left: ${coordsOne.x}; z-index: -1`);
        }

        svg.setAttribute('width', width);
        svg.setAttribute('height', height);

        line.setAttribute('style', `stroke:rgb(${Math.floor(Math.random() * 255) + 1},${Math.floor(Math.random() * 255) + 1},${Math.floor(Math.random() * 255) + 1});stroke-width:3`);

        svg.appendChild(line);

        container.appendChild(svg);
        this.drawn = true;
      }
    }
  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.id = urlParameters['key'];
    });
    this.dataSet = this.hallOfFameService.getHallOfFameSessionById(this.id);
  }

  determineHighlight(item, metaphor) {
    if (item[metaphor].metaphor === item.selectedMetaphor.metaphor) {
      return 'selected';
    } else {
      return 'abandoned';
    }
  }

}
