import { Injectable } from '@angular/core';
import * as Routes from 'assets/json/routes.json';
import {Observable} from 'rxjs/Observable';
import {Route} from '@angular/router';
import {FlierComponent} from '../flier/flier.component';
import {DetailComponent} from '../detail/detail.component';

@Injectable()
export class RouteService {

  routes: any = Routes;

  constructor() { }

  getRoutes(): Observable<Array<Route>> {
    const routeList: Array<Route> = new Array<Route>();

    this.routes.forEach((r) => {
      if (r.component === 'FlierComponent') {
        routeList.push({path: r.path, component: FlierComponent});
      } else if (r.component === 'DetailComponent') {
        routeList.push({path: r.path, component: DetailComponent});
      }

    });

    return Observable.of(routeList);
  }

}
