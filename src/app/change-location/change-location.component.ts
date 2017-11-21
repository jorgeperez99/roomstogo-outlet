import {Component, Inject, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-change-location',
  templateUrl: './change-location.component.html',
  styleUrls: ['./change-location.component.scss']
})
export class ChangeLocationComponent implements OnInit {

  @Input() userState: string;
  userZip: number;

  constructor() { }

  ngOnInit() {
  }

  onNoClick(): void {
    // this.dialogRef.close();
  }

}
