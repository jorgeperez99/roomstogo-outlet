import {Injectable, OnDestroy, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import { IMenuItem } from '../models/menuitem.model';
import {WindowRefService} from './window-ref.service';
import {Subject} from 'rxjs/Subject';
import {ScreenService} from './screen.service';
import {Subscription} from 'rxjs/Subscription';


@Injectable()
export class MenuService implements OnDestroy {
  items: Array<IMenuItem>;
  isVertical = false;
  isOpen = false;
  screenSubscription: Subscription;

  constructor(private http: Http, private screenService: ScreenService) {
    this.reset();
    this.screenSubscription = screenService.screenResize$.subscribe(() => this.reset());
  }


  ngOnDestroy(): void {
    this.screenSubscription.unsubscribe();
  }

  private reset () {
    if (this.screenService.isLarge) {
      this.isVertical = false;
      this.isOpen = false;
    } else {
      this.isVertical = true;
      this.isOpen = false;
    }
  }

  toggleSideNav() {
    this.isOpen = !this.isOpen;
  }

  hydrateItems() {
    this.http.get('assets/json/menu.json')
      .subscribe(res => this.items = res.json());
  }
}
