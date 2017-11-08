import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IMenuItem } from '../models/menuitem.model';
import {WindowRefService} from './window-ref.service';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class MenuService {

  items: Array<IMenuItem>;
  isVertical = false;

  // TODO: move screen related dependency to screenService in the future.
  largeBreakpoint = 768;
  screenWidth = 1000;
  screenHeight = 800;

  constructor(private http: Http, private windowRef: WindowRefService) {

    try {
      this.setScreenSize();
      this.windowRef.nativeWindow.addEventListener('resize', (event) => this.onResize(event));

    } catch (e) {

    }
  }

  private setScreenSize(): void {
    this.screenWidth = this.windowRef.nativeWindow.innerWidth;
    this.screenHeight = this.windowRef.nativeWindow.innerHeight;
  }

  onResize ($event): void {
    this.setScreenSize();
    if (this.screenWidth >= this.largeBreakpoint) {
      this.isVertical = false;
    }
  }

  isLarge(): boolean {
    return this.screenWidth >= this.largeBreakpoint;
  }


  toggleSideNav() {
    this.isVertical = !this.isVertical;
  }

  hydrateItems() {
    this.http.get('assets/json/menu.json')
      .subscribe(res => this.items = res.json());
  }
}
