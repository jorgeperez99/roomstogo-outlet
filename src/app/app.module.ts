import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { FlierComponent } from './flier/flier.component';
import { appRoutes } from './app.routing';
import { MenuComponent } from './menus/menu/menu.component';
import { MenuItemComponent } from './menus/menuitem/menuitem.component';
import {MenuService} from './menus/menu.service';
import {WindowRefService} from './services/window-ref.service';
import { PopupMenuComponent } from './menus/popup-menu/popup-menu.component';
import {ScreenService} from "./services/screen.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubCategoryComponent,
    FlierComponent,
    MenuComponent,
    MenuItemComponent,
    PopupMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash : true })
  ],
  providers: [
    WindowRefService,
    ScreenService,
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
