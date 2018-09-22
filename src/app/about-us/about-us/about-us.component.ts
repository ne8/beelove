import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  text2: string;
  constructor() {
    this.text2 = '<b>sdadsa</b>';
  }

  ngOnInit() {
  }

}
