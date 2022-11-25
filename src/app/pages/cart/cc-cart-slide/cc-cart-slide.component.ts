import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cc-cart-slide',
  templateUrl: './cc-cart-slide.component.html',
  styleUrls: ['./cc-cart-slide.component.scss'],
})
export class CcCartSlideComponent implements OnInit {
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
