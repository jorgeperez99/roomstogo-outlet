import { Component } from '@angular/core';
import { MenuService } from './menus/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private menuService: MenuService) {
    menuService.hydrateItems();
  }


}
