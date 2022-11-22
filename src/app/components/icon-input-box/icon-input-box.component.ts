import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-input-box',
  templateUrl: './icon-input-box.component.html',
  styleUrls: ['./icon-input-box.component.scss'],
})
export class IconInputBoxComponent implements OnInit {
  @Input('leftIcon') leftIcon;
  @Input('rightIcon') rightIcon;
  @Input('placeholder') placeholder;
  @Input('color') color = 'medium';
  constructor() {}

  ngOnInit() {}
}
