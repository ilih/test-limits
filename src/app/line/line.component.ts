import { Component, OnDestroy, OnInit } from '@angular/core';
import { LimitsService } from '../limits.service';
import { LimitsData } from '../model/limits-data';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit, OnDestroy {
  limitsData: LimitsData;
  limitsRange = [];
  error = false;
  limits = null;

  constructor(private ls: LimitsService) { }

  ngOnInit() {
    this.limits = this.ls.getLimits().subscribe(data => {
      this.limitsData = data;
      this.createLimitsRange(data.limits);
    });
  }

  createLimitsRange(limits) {
    for(const limit in limits) {
      for (let i = limits[limit].start; i <= limits[limit].end; i++) {
        this.limitsRange.push(i);
      }
    }
  }

  checkStatus(value) {
    for (let i = value[0]; i < value[1]; i++) {
      if (this.limitsRange.some(x => x === i)) {
        this.error = true;
        break;
      } else {
        this.error = false;
      }
    }
  }

  ngOnDestroy() {
    this.limits.unsubscribe();
  }
}
