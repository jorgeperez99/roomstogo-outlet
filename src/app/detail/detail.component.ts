import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DetailService} from '../services/detail.service';
import {DetailContent} from '../models/detail.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  detail: DetailContent;

  constructor(private router: Router, private detailService: DetailService) { }

  ngOnInit() {
    this.detailService.getDetail(this.router.url).subscribe((detail: DetailContent) => {
      this.detail = detail;
    });
  }

}
