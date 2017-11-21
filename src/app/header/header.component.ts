import {Component, OnInit, ViewChild} from '@angular/core';
import { WindowRefService } from '../services/window-ref.service';
import { MenuService } from '../services/menu.service';
import {ChangeLocationComponent} from '../change-location/change-location.component';
import {ScreenService} from '../services/screen.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild(ChangeLocationComponent) changeLocationComponent: ChangeLocationComponent;
  userState = 'FL';
  desktop = '_desktop';

  changeLocationSaveCallback = () => {
   this.userState = this.changeLocationComponent.userState;
  }

  constructor(private screenService: ScreenService, public menuService: MenuService) { }

  ngOnInit() {
    this.screenService.screenResizeIsLarge$.subscribe((isLarge: boolean) => {
      if (isLarge) {
        this.desktop = '_desktop';
      } else {
        this.desktop = '';
      }
    });

  }

  openDialog(): void {

  }



}
