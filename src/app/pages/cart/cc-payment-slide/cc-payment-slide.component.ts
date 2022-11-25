import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cc-payment-slide',
  templateUrl: './cc-payment-slide.component.html',
  styleUrls: ['./cc-payment-slide.component.scss'],
})
export class CcPaymentSlideComponent implements OnInit {
  @Output('toCheckout') toCheckout: EventEmitter<any> = new EventEmitter<any>();
  @Output('toOut') toOut: EventEmitter<any> = new EventEmitter<any>();
  activePaymentOption = 2;
  constructor() {}

  ngOnInit() {}
  openCheckout() {
    this.toCheckout.emit();
  }
  closeModal() {
    this.toOut.emit();
  }
}
