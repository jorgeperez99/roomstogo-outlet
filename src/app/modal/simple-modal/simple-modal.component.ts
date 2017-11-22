import {Component, ElementRef, EventEmitter, Inject, Injector, Input, OnInit, Output, ViewChild} from '@angular/core';
import {JQ_TOKEN } from '../../services/jquery.service';
import {MenuService} from '../../services/menu.service';


@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.scss']
})
export class SimpleModalComponent implements OnInit {
  @ViewChild('modalContainer') containerEl: ElementRef;
  @Input() title: string;
  @Input() elementId: string;
  @Input() saveButtonText = 'Save';
  @Input() modalSize: number;
  @Input() modalMinHeight = '100px';
  @Output() primaryBtnClick: EventEmitter<any> = new EventEmitter();

  modalSizeEnum = ModalSizeEnum;

  constructor(@Inject(JQ_TOKEN) private $: any, public menuService: MenuService) { }

  ngOnInit() {
  }

  onPrimaryBtnClick () {
    this.$(this.containerEl.nativeElement).modal('hide');
    this.primaryBtnClick.emit();
  }
}

export const ModalSizeEnum = {
  Small: 0,
  Medium: 1,
  Large: 2
}
