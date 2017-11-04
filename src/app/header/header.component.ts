import { Component, OnInit } from '@angular/core';
import { WindowRefService } from '../services/window-ref.service';
import { MenuService } from '../menus/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

  // goToRtgKids () {
  //   this.windowService.nativeWindow.location = 'https://www.roomstogokids.com';
  // }
  // goToRtg () {
  //   this.windowService.nativeWindow.location = 'https://www.roomstogo.com';
  // }
}
