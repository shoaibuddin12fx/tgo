import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/basic/nav.service';

@Component({
  selector: 'app-news-reviews',
  templateUrl: './news-reviews.page.html',
  styleUrls: ['./news-reviews.page.scss'],
})
export class NewsReviewsPage implements OnInit {

  constructor(private nav: NavService) { }

  ngOnInit() {
  }
  back(){
    this.nav.pop()
  }
}
