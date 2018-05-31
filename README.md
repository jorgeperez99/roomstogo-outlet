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
The service will load the routes and they will be loaded dynamically.

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
