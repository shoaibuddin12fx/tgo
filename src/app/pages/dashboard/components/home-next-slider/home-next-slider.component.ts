import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-home-next-slider',
  templateUrl: './home-next-slider.component.html',
  styleUrls: ['./home-next-slider.component.scss'],
})
export class HomeNextSliderComponent implements OnInit {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  slides: any[] = [];
  constructor(private dataService: DataService) {
    this.slides = dataService.getHomeSlides();
  }

  ngOnInit() {}
}
