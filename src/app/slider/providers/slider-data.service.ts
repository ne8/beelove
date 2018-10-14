import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const URL = '/assets/data/slider-data.json';

@Injectable({
  providedIn: 'root'
})
export class SliderDataService {


  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get(URL);
  }
}
