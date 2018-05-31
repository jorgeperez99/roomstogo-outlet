# RoomstogoOutlet

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

## Run it
1. install
```
npm install
```
1. run
```
ng serve
```
## Sample
### Dynamic routes
The service will load the routes and they will be loaded dynamically.  The RouterModule.forRoot([]) is called to initialize the router

**app.module.ts**
```
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FlierComponent,
    MenuComponent,
    MenuItemComponent,
    PopupMenuComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([])
  ],
  providers: [
    RouteService,
    WindowRefService,
    ScreenService,
    MenuService,
    DetailService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ DetailComponent, FlierComponent ]
})
export class AppModule { }
```
**app.routing.ts**
This file is not a class. it just holds the creation of a constant
```
import {Routes} from '@angular/router';
import { FlierComponent } from './flier/flier.component';
import {DetailComponent} from './detail/detail.component';

export const appRoutes: Routes = [
  { path: 'flier', component: FlierComponent},
  { path: 'discount-living-rooms/sofas', component: DetailComponent},
  { path: 'discount-living-rooms/sleeper-sofas', component: DetailComponent},
  { path: 'discount-dining-rooms/dining-room-sets', component: DetailComponent},
  { path: 'discount-dining-rooms/tables', component: DetailComponent},
  { path: 'discount-bedrooms/bedroom-sets', component: DetailComponent},
  { path: 'discount-bedrooms/queen-bedroom-sets', component: DetailComponent},
  { path: 'discount-leather/sofas', component: DetailComponent},
  { path: 'discount-leather/leather-loveseats', component: DetailComponent},
  { path: 'discount-mattress/queen-mattresses', component: DetailComponent},
  { path: 'discount-mattress/king-mattresses', component: DetailComponent},
  { path: 'discount-home-decor/lamps', component: DetailComponent},
  { path: 'discount-home-decor/rugs', component: DetailComponent},

  { path: '', component: FlierComponent},
  { path: '**', component: FlierComponent},
];
```
