///<reference path="../models/dtos/detail.model.ts"/>
import { Injectable } from '@angular/core';
import * as Details from 'assets/json/detail.json';
import {DetailDto, DetailContentDto} from '../models/dtos/detail.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class DetailService {
  details: any = Details;
  constructor() { }

  getDetail(routerUrl: string): Observable<DetailContentDto> {
    const detail = (<Array<DetailDto>>this.details).find((d: DetailDto) => {
      return d.routerUrl === routerUrl.substring(1);
    });
    return Observable.of(<DetailContentDto>detail.content);
  }
}
