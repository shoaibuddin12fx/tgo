import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalService } from 'src/app/services/basic/modal.service';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  constructor(public modals: ModalService) {}

  ngOnInit() {}

  toCheckout(index) {
    if (index < 4) {
      this.swiper?.swiperRef.slideTo(index);
    } else {
      this.modals.dismiss({
        timestamp: Date.now(),
      });
    }
  }

  toOut(num) {
    if (num == 1) {
      this.modals.dismiss({
        timestamp: Date.now(),
      });
    } else {
      this.swiper?.swiperRef.slidePrev();
    }
  }
}
