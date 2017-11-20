import { Component, OnInit } from '@angular/core';
import { WindowRefService } from '../services/window-ref.service';
import { MenuService } from '../services/menu.service';
import {MatDialog} from '@angular/material';
import {ChangeLocationComponent} from '../change-location/change-location.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  animal: string;
  name: string;

  constructor(private menuService: MenuService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {

  }

  changeLocation() {
    const dialogRef = this.dialog.open(ChangeLocationComponent, {
      width: '350px',
      hasBackdrop: true,
      backdropClass: 'modal-backdrop',
      panelClass: 'modal-panel',
      data: {name: this.name , animal: this.animal}

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog is closed');
      this.animal = result;
    });
  }

}
