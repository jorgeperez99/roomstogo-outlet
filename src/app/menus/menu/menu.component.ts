import {Component, HostListener, OnInit} from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

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
