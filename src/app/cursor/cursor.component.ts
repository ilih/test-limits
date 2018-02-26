import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Range } from '../model/range';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss']
})
export class CursorComponent implements OnInit {
  @Input()range: Range;
  @Output()position = new EventEmitter();
  firstVal = 0;
  secondVal = 0;
  rangeArr = null;

  constructor() { }

  ngOnInit() {
  }

  onChange(e) {
    const value = parseInt(e.target.value, 10);

    if (e.target.name === 'first') {
      this.firstVal = value;
    } else {
      this.secondVal = value;
    }

    this.rangeArr = [];
    this.rangeArr.push(this.firstVal);
    this.rangeArr.push(this.secondVal);

    if (this.firstVal > this.secondVal) {
      this.rangeArr.reverse();
    }

    this.position.emit(this.rangeArr);
  }
}
