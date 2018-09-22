import {Component, OnInit} from '@angular/core';
import {DataService} from '../providers/data.service';
import {interval} from 'rxjs';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  selectedIndex: number;
  transform: number;
  sliderArray: object[];
  refreshInterval: number;

  constructor(private data: DataService) {
    this.sliderArray = [];
    this.selectedIndex = 0;
    this.transform = 100;
    this.refreshInterval = 10000;
  }

  ngOnInit() {
    this.data.getData().subscribe((result: Result) => {
      this.sliderArray = result.sliderArray;
    });
    interval(this.refreshInterval).subscribe(x => {
      console.log(this.selectedIndex);
      if (this.selectedIndex + 2 > this.sliderArray.length) {
        this.selectedIndex = 0;
      } else {
        this.selectedIndex ++;
      }
    });

  }

  selected(x) {
    if (this.selectedIndex > this.sliderArray.length) {
      this.selectedIndex = 0;
    }
    this.selectedIndex = x;
  }

  keySelected(x) {
    this.selectedIndex = x;
  }
}

interface Result {
  sliderArray: SliderImage[];
}

interface SliderImage {
  img: string;
  alt: string;
  title: string;
  description: string;
}
