import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-box-ph',
  templateUrl: './item-box-ph.component.html',
  styleUrls: ['./item-box-ph.component.scss'],
})
export class ItemBoxPhComponent implements OnInit {
  @Input() item;
  constructor() {}

  ngOnInit() {}
}
