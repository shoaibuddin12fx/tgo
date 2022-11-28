import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cc-checkout-slide',
  templateUrl: './cc-checkout-slide.component.html',
  styleUrls: ['./cc-checkout-slide.component.scss'],
})
export class CcCheckoutSlideComponent implements OnInit {
  @Output('toCheckout') toCheckout: EventEmitter<any> = new EventEmitter<any>();
  @Output('toOut') toOut: EventEmitter<any> = new EventEmitter<any>();
  allData: any;
  shippingAddress: any;
  paymentMethod: any;
  totalPrice: any;
  constructor() {
    const dataService = new DataService();
    this.allData = dataService.getCheckOutDetail();
    this.shippingAddress = this.allData[0];
    this.paymentMethod = this.allData[1];
    this.totalPrice = this.allData[2];
  }

  ngOnInit() {}
  openCheckout() {
    this.toCheckout.emit();
  }
  closeModal() {
    this.toOut.emit();
  }
}
