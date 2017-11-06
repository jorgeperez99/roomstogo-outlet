import {Component, Input, OnInit} from '@angular/core';
import {MenuService} from '../menu.service';
import {IMenuItem} from '../menuitem.model';

@Component({
  selector: 'app-popup-menu',
  templateUrl: './popup-menu.component.html',
  styleUrls: ['./popup-menu.component.scss']
})
export class PopupMenuComponent implements OnInit {

  @Input() menu: Array<IMenuItem>;

  constructor(public menuService: MenuService) { }

  ngOnInit() {
  }

}
