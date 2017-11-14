import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FlierComponent } from './flier/flier.component';
import { appRoutes } from './app.routing';
import { MenuComponent } from './menus/menu/menu.component';
import { MenuItemComponent } from './menus/menuitem/menuitem.component';
import {MenuService} from './services/menu.service';
import {WindowRefService} from './services/window-ref.service';
import { PopupMenuComponent } from './menus/popup-menu/popup-menu.component';
import {ScreenService} from './services/screen.service';
import { DetailComponent } from './detail/detail.component';
import {DetailService} from './services/detail.service';
import {RouteService} from './services/route.service';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FlierComponent,
    MenuComponent,
    MenuItemComponent,
    PopupMenuComponent,
    DetailComponent,
    FooterComponent
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
