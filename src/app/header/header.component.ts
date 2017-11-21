import { Component, OnInit } from '@angular/core';
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

  userState = 'FL';
  desktop = '_desktop';
 changeLocationSaveCallback = () => {
   this.userState = 'GA';
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

  changeLocation() {
    // const dialogRef = this.dialog.open(ChangeLocationComponent, {
    //   width: '350px',
    //   hasBackdrop: true,
    //   backdropClass: 'modal-backdrop',
    //   panelClass: 'modal-panel',
    //   data: {name: this.name , animal: this.animal}
    //
    // });
    //
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('dialog is closed');
    //   this.animal = result;
    // });
  }

}
