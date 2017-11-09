import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IMenuItem } from '../models/menuitem.model';
import {WindowRefService} from './window-ref.service';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class MenuService {

  items: Array<IMenuItem>;
  isVertical = false;
  isOpen = false;

  // TODO: move screen related dependency to screenService in the future.
  largeBreakpoint = 750;
  screenWidth = 1000;
  screenHeight = 800;

  constructor(private http: Http, private windowRef: WindowRefService) {

    try {
      this.recalculate();
      this.windowRef.nativeWindow.addEventListener('resize', (event) => this.onResize(event));

    } catch (e) {

    }
  }

  private setScreenSize(): void {
    this.screenWidth = this.windowRef.nativeWindow.innerWidth;
    this.screenHeight = this.windowRef.nativeWindow.innerHeight;
  }

  private recalculate () {
    this.setScreenSize();
    if (this.isLarge) {
      this.isVertical = false;
      this.isOpen = false;
    } else {
      this.isVertical = true;
      this.isOpen = false;
    }
  }

  onResize ($event): void {
    this.recalculate();
  }

  get isLarge(): boolean {
    return this.screenWidth >= this.largeBreakpoint;
  }


  toggleSideNav() {
    this.isOpen = !this.isOpen;
  }

  hydrateItems() {
    this.http.get('assets/json/menu.json')
      .subscribe(res => this.items = res.json());
  }
}
