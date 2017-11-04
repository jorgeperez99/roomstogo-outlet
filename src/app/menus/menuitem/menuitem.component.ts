import {Component, Input, OnInit} from '@angular/core';
import {MenuService} from '../menu.service';
import {IMenuItem} from '../menuitem.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() item = <IMenuItem>null; // see angular-cli issue #2034
  constructor(public menuService: MenuService) {

  }

  ngOnInit() {
  }
}
