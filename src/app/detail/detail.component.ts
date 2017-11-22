import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DetailService} from '../services/detail.service';
import {DetailContentDto} from '../models/dtos/detail.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  detail: DetailContentDto;

  constructor(private router: Router, private detailService: DetailService) { }

  ngOnInit() {
    this.detailService.getDetail(this.router.url).subscribe((detail: DetailContentDto) => {
      this.detail = detail;
    });
  }

}
