import {
  Component,
  EventEmitter,
  Injector,
  OnInit,
  Output,
} from '@angular/core';
import { Validators } from '@angular/forms';
import { BasePage } from '../../base-page/base-page';

@Component({
  selector: 'app-signup-slide',
  templateUrl: './signup-slide.component.html',
  styleUrls: ['./signup-slide.component.scss'],
})
export class SignupSlideComponent extends BasePage implements OnInit {
  @Output('gotoLogin') gotoLogin: EventEmitter<any> = new EventEmitter<any>();
  aForm;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.initialize();
  }

  async initialize() {
    this.setupForm();
  }

  setupForm() {
    const re = /\S+@\S+\.\S+/;

    this.aForm = this.formBuilder.group({
      email: [
        '', //test@test.com
        Validators.compose([Validators.required, Validators.email]),
      ],
      password: [
        '', // 12345678
        Validators.compose([
          Validators.minLength(6),
          Validators.maxLength(30),
          Validators.required,
        ]),
      ],
    });
  }

  gotoLoginEvent() {
    console.log('clicked');
    this.gotoLogin.emit({ timestamp: Date.now() });
  }
}
