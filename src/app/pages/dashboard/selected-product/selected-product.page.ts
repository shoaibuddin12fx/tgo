import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/basic/nav.service';

@Component({
  selector: 'app-selected-product',
  templateUrl: './selected-product.page.html',
  styleUrls: ['./selected-product.page.scss'],
})
export class SelectedProductPage implements OnInit {

  constructor(private nav: NavService) { }

  ngOnInit() {
  }

  back(){
    this.nav.pop()
  }

}
