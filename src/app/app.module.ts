import {InjectionToken, NgModule} from '@angular/core';
import { BrowserModule,  } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FlierComponent } from './flier/flier.component';
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
import { ChangeLocationComponent } from './change-location/change-location.component';
import {JQ_TOKEN} from './services/jquery.service';
import {SimpleModalComponent} from './modal/simple-modal/simple-modal.component';
import { ModalTriggerDirective } from './modal/modal-trigger.directive';


declare let jQuery: Object;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FlierComponent,
    MenuComponent,
    MenuItemComponent,
    PopupMenuComponent,
    DetailComponent,
    FooterComponent,
    ChangeLocationComponent,
    SimpleModalComponent,
    ModalTriggerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([])
  ],
  providers: [
    RouteService,
    WindowRefService,
    ScreenService,
    MenuService,
    DetailService,
    { provide: JQ_TOKEN, useFactory: jQueryFactory }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ DetailComponent, FlierComponent, ChangeLocationComponent ]
})
export class AppModule { }

export function jQueryFactory() {
  return jQuery;
}
