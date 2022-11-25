import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cc-checkout-slide',
  templateUrl: './cc-checkout-slide.component.html',
  styleUrls: ['./cc-checkout-slide.component.scss'],
})
export class CcCheckoutSlideComponent implements OnInit {
  @Output('toCheckout') toCheckout: EventEmitter<any> = new EventEmitter<any>();
  @Output('toOut') toOut: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}
  openCheckout() {
    this.toCheckout.emit();
  }
  closeModal() {
    this.toOut.emit();
  }
}
