import {Component, ElementRef, Inject, Injector, Input, OnInit, ViewChild} from '@angular/core';
import {JQ_TOKEN } from '../../services/jquery.service';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.scss']
})
export class SimpleModalComponent implements OnInit {
  @Input() title: string;
  @Input() elementId: string;
  @Input() closeOnBodyClick = true;
  @ViewChild('modalContainer') containerEl: ElementRef;

  constructor(@Inject(JQ_TOKEN) private $: any) { }

  ngOnInit() {
  }

  closeModal() {
    if (this.closeOnBodyClick) {
      this.$(this.containerEl.nativeElement).modal('hide');
    }
  }

}
