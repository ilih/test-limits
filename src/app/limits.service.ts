import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {LimitsData} from './model/limits-data';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LimitsService {

  constructor(private http: HttpClient) { }


  getLimits(): Observable<LimitsData> {
    return this.http.get<LimitsData>('assets/data/limits.json');
  }

}
