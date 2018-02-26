import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Limit} from '../model/limit';

@Component({
  selector: 'app-limit',
  templateUrl: './limit.component.html',
  styleUrls: ['./limit.component.scss']
})
export class LimitComponent implements OnChanges {
  @Input()limit: Limit;
  start: number;
  width: number;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.limit) {
      const limit = changes.limit.currentValue;
      this.start = limit.start / limit.len * 100;
      this.width = (limit.end - limit.start) / limit.len * 100;
    }
  }
}
