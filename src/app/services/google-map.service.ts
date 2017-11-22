import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/throw';

import {HttpService, RequestHelper} from './http.service';
import {Http} from '@angular/http';
import {GoogleMapAddressDto} from '../models/dtos/googlemap.model';

@Injectable()
export class GoogleMapService {

  constructor(private http: Http) {

  }

  getAddressFromZip (zip: number): Observable<GoogleMapAddressDto> {
   const zipToAddressUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${ zip }&sensor=true`;
   return this.http.get(zipToAddressUrl).map(RequestHelper.extractObject);
  }
}
