import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/basic/nav.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.page.html',
  styleUrls: ['./products-list.page.scss'],
})
export class ProductsListPage implements OnInit {

  constructor(private nav: NavService) { }

  ngOnInit() {
  }
  back(){
    this.nav.pop()
  }

  openDetails(){
    this.nav.push('pages/selected-product')
  }
}
