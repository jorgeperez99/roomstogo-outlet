import {
  Component,
  ElementRef, HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { IMenuItem } from '../../models/menuitem.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() item = <IMenuItem>null; // see angular-cli issue #2034
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

  @HostListener('click', ['$event'])
  onClick(event): void {
    event.stopPropagation();

    if (this.item.submenu) {
      if (this.menuService.isVertical) {
        this.mouseInPopup = !this.mouseInPopup;
      }
    } else if (this.item.route) {
      const newEvent = new MouseEvent('mouseleave', {bubbles: true});
      this.renderer.selectRootElement(this.el.nativeElement).dispatchEvent(newEvent);

      this.router.navigate(['/' + this.item.route]);
    }
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event): void {
    if (!this.menuService.isVertical) {
      this.mouseInItem = false;
    }
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (!this.menuService.isVertical) {
      if (this.item.submenu) {
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
}
