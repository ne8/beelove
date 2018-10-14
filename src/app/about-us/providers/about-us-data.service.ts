import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


const aboutUsContentLocation = '/assets/data/about-us-data.json';
const aboutUsBannerLocation = '/assets/data/banner-data.json';

@Injectable({
  providedIn: 'root'
})
export class AboutUsDataService {


  constructor(private http: HttpClient) {
  }

  getAboutUsContent() {
    return this.http.get(aboutUsContentLocation);
  }

  getAboutUsBannerContent() {
    return this.http.get(aboutUsBannerLocation);
  }
}

