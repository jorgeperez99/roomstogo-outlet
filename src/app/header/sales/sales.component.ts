import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  expanded = false;

  constructor() { }

  ngOnInit() {
  }

  expandCollapse () {
    this.expanded = !this.expanded;
  }

}
