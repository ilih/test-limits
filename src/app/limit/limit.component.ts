import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Limit} from '../model/limit';

@Component({
  selector: 'app-limit',
  templateUrl: './limit.component.html',
  styleUrls: ['./limit.component.scss']
})
export class LimitComponent implements OnInit {
  @Input()limit: Limit;
  @Output()limits = new EventEmitter()


  constructor() { }

  ngOnInit() {
  }

}
