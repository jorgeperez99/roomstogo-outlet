///<reference path="../models/detail.model.ts"/>
import { Injectable } from '@angular/core';
import * as Details from 'assets/json/detail.json';
import {IDetail, IDetailContent} from '../models/detail.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class DetailService {
  details: any = Details;
  constructor() { }

  getDetail(routerUrl: string): Observable<IDetailContent> {
    const detail = (<Array<IDetail>>this.details).find((d: IDetail) => {
      return d.routerUrl === routerUrl.substring(1);
    });
    return Observable.of(<IDetailContent>detail.content);
  }
}
