import { Component, OnInit, ViewChild } from '@angular/core';
import { NavService } from 'src/app/services/basic/nav.service';
import { DataService } from 'src/app/services/data.service';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-home-category-slider-boxes',
  templateUrl: './home-category-slider-boxes.component.html',
  styleUrls: ['./home-category-slider-boxes.component.scss'],
})
export class HomeCategorySliderBoxesComponent implements OnInit {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  config: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: true,
    // pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  slides: any[] = [];
  constructor(private nav: NavService, private dataService: DataService) {
    this.slides = dataService.getHomeCategoriesBoxed();
  }

  ngOnInit() {}

  activeIndex($event) {
    console.log($event);
    this.slides = this.slides.map((x) => {
      x.active = x.id == $event.id ? 1 : 0;
      return x;
    });
  }

  menuDetails() {
    this.nav.push('pages/menu-details');
  }
}
