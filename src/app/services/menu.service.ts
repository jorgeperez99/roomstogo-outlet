import {Injectable, OnDestroy, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import { MenuItem } from '../models/menuitem.model';
import {WindowRefService} from './window-ref.service';
import {Subject} from 'rxjs/Subject';
import {ScreenService} from './screen.service';
import {Subscription} from 'rxjs/Subscription';


@Injectable()
export class MenuService implements OnDestroy {
  items: Array<MenuItem>;
  isVertical = false;
  isOpen = false;
  screenSubscription: Subscription;

  constructor(private http: Http, private screenService: ScreenService) {
    this.reset(screenService.isLarge);
    this.screenSubscription = screenService.screenResizeIsLarge$.subscribe((isLarge: boolean) => this.reset(isLarge));
  }


  ngOnDestroy(): void {
    this.screenSubscription.unsubscribe();
  }

  private reset (isLarge: boolean) {
    if (isLarge) {
      this.isVertical = false;
      this.isOpen = false;
    } else {
      this.isVertical = true;
      this.isOpen = false;
    }
  }

  toggleSideNav() {
    // this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.closeSideNav();
    } else {
      this.openSideNav();
    }
  }

  closeSideNav() {
    this.isOpen = false;
    setTimeout(() => this.isVertical = false, 100);
  }

  openSideNav() {
    this.isOpen = true;
    this.isVertical = true;
  }

  hydrateItems() {
    this.http.get('assets/json/menu.json')
      .subscribe(res => this.items = res.json());
  }

  closeAllSubmenu() {
    this.closeAllSubmenuRecursive(this.items);
  }

  private closeAllSubmenuRecursive(items: Array<MenuItem>): void {
    items.forEach(item => {
      item.submenuOpen = false;
      if (item.submenu) {
        this.closeAllSubmenuRecursive(item.submenu);
      }
    });
  }

}
