import { Component, OnInit } from '@angular/core';
import {AboutUsDataService} from '../providers/about-us-data.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  aboutUsContent: AboutUsContent;
  aboutUsBanner: Banner;


  constructor(private dataService: AboutUsDataService) {
    this.aboutUsContent = new class implements AboutUsContent {
      aboutUsArray: AboutUs[];
      title: string;
    };
    this.aboutUsBanner = new class implements Banner {
      subtitle: string;
      title: string;
    };
  }

  ngOnInit() {
    this.dataService.getAboutUsContent().subscribe((result: AboutUsContent) => {
      this.aboutUsContent = result;
    });
    this.dataService.getAboutUsBannerContent().subscribe((result: Banner) => {
        this.aboutUsBanner = result;
    });
  }

}

interface Banner {
  title: string;
  subtitle: string;
}
interface AboutUsContent {
  title: string;
  aboutUsArray: AboutUs[];
}

interface AboutUs {
  imgLocation: string;
  alt: string;
  subtitle: string ;
  text: string;
}
