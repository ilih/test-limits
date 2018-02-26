import { Component, OnInit } from '@angular/core';
import {LimitsService} from '../limits.service';
import {LimitsData} from '../model/limits-data';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {
  limitsData: LimitsData;

  constructor(private ls: LimitsService) { }

  ngOnInit() {
    this.ls.getLimits().subscribe(data => {
      console.log(data);
      this.limitsData = data;
    });
  }

}
