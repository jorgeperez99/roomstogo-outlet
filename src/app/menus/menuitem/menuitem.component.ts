import {
  Component,
  ElementRef, HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../models/menuitem.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() item = <MenuItem>null; // see angular-cli issue #2034
  @Input() menuIndex: number;
  popupLeftPosition: number;

  mouseInPopup = false;
  mouseInItem = false;

  constructor(public menuService: MenuService,
              private renderer: Renderer2,
              private el: ElementRef,
              private router: Router) {

  }

  ngOnInit() {
  }

  @HostListener('touchstart', ['$event'])
  @HostListener('click', ['$event'])
  onClick(event): void {
    event.stopPropagation();

    if (this.item.submenu) {
      if (this.menuService.isVertical) {
        this.mouseInPopup = !this.mouseInPopup;
      }
    } else if (this.item.route) {

      // below code does not work well with iPad 3. if in the future needs to use it,
      // we need to use polyfill for MouseEvent in 'assets/polyfills/mouseEvent.js'
      // uncomment the line to import that file in polyfill.ts -- chikako

      // if (!this.menuService.isVertical) {
      //   const newEvent = new MouseEvent('mouseleave', {bubbles: true});
      //   this.renderer.selectRootElement(this.el.nativeElement).dispatchEvent(newEvent);
      // } else {
      //   this.menuService.isOpen = false;
      // }
      if (this.menuService.isVertical) {
        this.menuService.isOpen = false;
      } else {
        this.menuService.closeAllSubmenu();
      }

      this.router.navigate(['/' + this.item.route]);
    }
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event): void {
    if (!this.menuService.isVertical) {
      this.mouseInItem = false;
    }
  }

  @HostListener('touchstart', ['$event'])
  @HostListener('mouseenter')
  onMouseEnter(): void {
    console.log('onmouse enter');
    if (!this.menuService.isVertical) {
      if (this.item.submenu) {
        // close other submenu;
        this.menuService.closeAllSubmenu();
        this.item.submenuOpen = true;
        this.mouseInItem = true;
        this.popupLeftPosition = this.menuIndex * 100 * -1;
      }
    }
  }

  onPopupMouseLeave(event) {
    if (!this.menuService.isVertical) {
      this.mouseInPopup = false;
    }
  }

  onPopupMouseEnter(event) {
    if (!this.menuService.isVertical) {
      this.mouseInPopup = true;
    }
  }

  get openSubmenu(): boolean {

    if (this.menuService.isVertical) {
      return (this.mouseInPopup || this.mouseInItem);
    } else {
      return (this.mouseInPopup || this.mouseInItem) && this.item.submenuOpen;
    }

  }
}
