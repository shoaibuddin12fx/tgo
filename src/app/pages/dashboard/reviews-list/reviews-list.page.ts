import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/basic/nav.service';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.page.html',
  styleUrls: ['./reviews-list.page.scss'],
})
export class ReviewsListPage implements OnInit {

  constructor(private nav: NavService) { }
  

  ngOnInit() {
  }
  back(){
    this.nav.pop()
  }
}
