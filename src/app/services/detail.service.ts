///<reference path="../models/detail.model.ts"/>
import { Injectable } from '@angular/core';
import * as Details from 'assets/json/detail.json';
import {Detail, DetailContent} from '../models/detail.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class DetailService {
  details: any = Details;
  constructor() { }

  getDetail(routerUrl: string): Observable<DetailContent> {
    const detail = (<Array<Detail>>this.details).find((d: Detail) => {
      return d.routerUrl === routerUrl.substring(1);
    });
    return Observable.of(<DetailContent>detail.content);
  }
}
