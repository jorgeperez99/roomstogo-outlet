import {Component, OnInit, ViewChild} from '@angular/core';
import { WindowRefService } from '../services/window-ref.service';
import { MenuService } from '../services/menu.service';
import {ScreenService} from '../services/screen.service';
import {MapService} from '../services/map.service';
import {GoogleMapAddressDto} from '../models/dtos/googlemap.model';
import {ModalSizeEnum} from '../modal/simple-modal/simple-modal.component';
import {StorageHelper, StorageKeys} from '../helpers/storage.helper';
import {UserInfoDto} from '../models/dtos/user.model';
import {MenuItemDto} from '../models/dtos/menuitem.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userZip: number;
  desktop = '_desktop';
  modalSizeEnum = ModalSizeEnum;
  userState = 'GA';

  constructor(private screenService: ScreenService,
              public menuService: MenuService,
              private googleMapService: MapService ) {

  }

  ngOnInit() {
    this.screenService.screenResizeIsLarge$.subscribe((isLarge: boolean) => {
      if (isLarge) {
        this.desktop = '_desktop';
      } else {
        this.desktop = '';
      }
    });

    const userInfo = StorageHelper.getLocal<UserInfoDto>(StorageKeys.userInfo);
    this.userState = userInfo ? userInfo.state : 'GA';
  }

  saveLocation() {
    this.googleMapService.getAddressFromZip(this.userZip)
      .subscribe((address: GoogleMapAddressDto) => {
        this.userState = this.extractStateFromAddress(address);
        this.saveUserInfoToStorage(this.userState);
      });
  }

  private saveUserInfoToStorage(state: string): void {
    const userInfo = new UserInfoDto();

    userInfo.state = state;
    StorageHelper.setLocal(StorageKeys.userInfo, userInfo);
  }

  private extractStateFromAddress(address: GoogleMapAddressDto): string {
    const stateAddress = address.address_components.find(ac => {
      const stateType = ac.types.find(t => t === 'administrative_area_level_1');
      return !!stateType;
    });

    return stateAddress.short_name;
  }
}
