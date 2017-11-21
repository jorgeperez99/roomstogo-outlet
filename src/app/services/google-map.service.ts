import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/throw';

import {HttpService, RequestHelper} from './http.service';

@Injectable()
export class GoogleMapService {

  constructor(private http: HttpService) {

  }

  getAddressFromZip (zip: number): Observable<any> {
   const zipToAddressUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${ zip }&sensor=true`;
   return this.http.get(zipToAddressUrl).map(RequestHelper.extractData);
  }


}
