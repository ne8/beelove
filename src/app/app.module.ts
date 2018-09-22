import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {MenuComponent} from './menu/menu/menu.component';
import { ImageSliderComponent } from './slider/image-slider/image-slider.component';
import {HttpClientModule} from '@angular/common/http';
import { AboutUsComponent } from './about-us/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ImageSliderComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
