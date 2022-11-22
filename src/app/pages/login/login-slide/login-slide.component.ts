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
  selector: 'app-login-slide',
  templateUrl: './login-slide.component.html',
  styleUrls: ['./login-slide.component.scss'],
})
export class LoginSlideComponent extends BasePage implements OnInit {
  @Output('gotoSignup') gotoSignup: EventEmitter<any> = new EventEmitter<any>();
  @Output('gotoDashboard') gotoDashboard: EventEmitter<any> =
    new EventEmitter<any>();

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

  gotoSignupEvent() {
    this.gotoSignup.emit({ timestamp: Date.now() });
  }

  gotoDashboardEvent() {
    this.gotoDashboard.emit({ timestamp: Date.now() });
  }
}
