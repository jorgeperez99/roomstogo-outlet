import {Component, HostListener, OnInit} from '@angular/core';
import { MenuService } from '../../services/menu.service';
import {MenuItemDto} from '../../models/dtos/menuitem.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  weeklySpecialItem: MenuItemDto =
    {
      text: 'Weekly Special',
      icon: '',
      route: 'flier',
      submenu: [
        {
          text: 'Weekly Pritable Ad',
          icon: '',
          route: 'filer/weekly',
          submenu: null
        },
        {
          text: 'Matress Pritable Ad',
          icon: '',
          route: 'flier/matress',
          submenu: null
        }],
      submenuLink: './assets/images/cyberMonday.png'
    };

  constructor(public menuService: MenuService) { }

  ngOnInit() {
  }

  @HostListener('click', ['$event'])
  onClick(event): void {
    event.stopPropagation();


    this.menuService.closeSideNav();

    console.log('menu c clicked');
  }

  navClicked(event) {
    event.stopPropagation();

    console.log('nav c clicked');
  }

}
