import {Component, ElementRef, Inject, Injector, Input, OnInit, ViewChild} from '@angular/core';
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
  @Input() modalBodyHeight = '250px';
  @Input() saveButtonText = 'Save';
  @Input() saveCallback = () => null;

  constructor(@Inject(JQ_TOKEN) private $: any, public menuService: MenuService) { }

  ngOnInit() {
  }

  // closeModal() {
  //   if (this.closeOnBodyClick) {
  //     this.$(this.containerEl.nativeElement).modal('hide');
  //   }
  // }

  save () {

    // TODO: chi I don't like this just emit event and do @Output to notice save happened.
    this.saveCallback();

    this.$(this.containerEl.nativeElement).modal('hide');
  }

}
