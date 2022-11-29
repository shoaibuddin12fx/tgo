import {
  Component,
  Injector,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { BasePage } from 'src/app/pages/base-page/base-page';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cc-box-layout',
  templateUrl: './cc-box-layout.component.html',
  styleUrls: ['./cc-box-layout.component.scss'],
})
export class CcBoxLayoutComponent implements OnInit {
  @Input('heading') heading = '';
  @Input('list') list = [];
  @Output('selection') selection: EventEmitter<any> = new EventEmitter<any>();
  constructor(injector: Injector) {}

  ngOnInit() {}

  menuDetails(item) {
    this.selection.emit(item);
  }
}
