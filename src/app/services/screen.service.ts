import { Injectable } from '@angular/core';
import {WindowRefService} from './window-ref.service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ScreenService {

  largeBreakpoint = 750;
  screenWidth = 1000;
  screenHeight = 800;
  screenResize$: Subject<null> = new  Subject<null>();

  constructor(private windowRef: WindowRefService) {
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
    this.screenResize$.next();
  }

  onResize ($event): void {
    this.recalculate();
  }

  get isLarge(): boolean {
    return this.screenWidth >= this.largeBreakpoint;
  }

}
