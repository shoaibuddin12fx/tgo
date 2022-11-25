import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icon-input-box',
  templateUrl: './icon-input-box.component.html',
  styleUrls: ['./icon-input-box.component.scss'],
})
export class IconInputBoxComponent implements OnInit {
  @Input('leftIcon') leftIcon;
  @Input('rightIcon') rightIcon;
  @Input('placeholder') placeholder;
  @Input('type') type;
  @Input('color') color = 'medium';

  @Output() lefticonClicks = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}
  lefticonClick() {
    this.lefticonClicks.emit();
  }
}
