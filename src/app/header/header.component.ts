import {Component, OnInit, ViewChild} from '@angular/core';
import { WindowRefService } from '../services/window-ref.service';
import { MenuService } from '../services/menu.service';
import {ChangeLocationComponent} from '../change-location/change-location.component';
import {ScreenService} from '../services/screen.service';
import {GoogleMapService} from '../services/google-map.service';
import {GoogleMapAddressDto} from '../models/dtos/googlemap.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild(ChangeLocationComponent) changeLocationComponent: ChangeLocationComponent;
  userState = 'FL';
  desktop = '_desktop';


  constructor(private screenService: ScreenService,
              public menuService: MenuService,
              private googleMapService: GoogleMapService ) {

  }

  ngOnInit() {
    this.screenService.screenResizeIsLarge$.subscribe((isLarge: boolean) => {
      if (isLarge) {
        this.desktop = '_desktop';
      } else {
        this.desktop = '';
      }
    });
  }

  saveLocation() {
    const userZip = this.changeLocationComponent.userZip;
    this.googleMapService.getAddressFromZip(userZip)
      .subscribe((address: GoogleMapAddressDto) => {
        console.log('address...', address);
        const stateAddress = address.address_components.find(ac => {
          const stateType = ac.types.find(t => t === 'administrative_area_level_1');
          return !!stateType;
        });

        this.userState = stateAddress.short_name;
      });
  }
}
