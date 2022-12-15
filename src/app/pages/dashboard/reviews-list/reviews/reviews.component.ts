import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/basic/nav.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {

  constructor(private nav:NavService) { }

  ngOnInit() {}


  gotoNewsReviews(){
   
      this.nav.push('pages/news-reviews');
    
   
  }
}
