import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  slides: any[] = [];
  constructor(private dataService: DataService) {
    this.slides = dataService.getHomeCategoriesBoxed();
  }

  ngOnInit() {}
}
