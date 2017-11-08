import {Component, OnInit} from '@angular/core';
import { MenuService } from './services/menu.service';
import {Route, Router} from '@angular/router';
import {RouteService} from './services/route.service';
import {FlierComponent} from './flier/flier.component';
import {DetailComponent} from './detail/detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  entryComponents: [FlierComponent, DetailComponent]
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private router: Router, private routeService: RouteService,  private menuService: MenuService) {

  }

  ngOnInit(): void {
    this.routeService.getRoutes().subscribe((routes: Array<Route>) => {
      // this.router.resetConfig(routes);
      this.router.resetConfig(routes);
      this.menuService.hydrateItems();
    });
  }

}
