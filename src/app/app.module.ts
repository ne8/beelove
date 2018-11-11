import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {MenuComponent} from './menu/menu/menu.component';
import { ImageSliderComponent } from './slider/image-slider/image-slider.component';
import {HttpClientModule} from '@angular/common/http';
import { AboutUsComponent } from './about-us/about-us/about-us.component';
import { ColorBeePipe } from './pipes/color-bee.pipe';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutesModule } from './routes/routes.module';
import { ShopListComponent } from './shop/shop-list/shop-list.component';
import { CartComponent } from './shop/cart/cart.component';
import { ProductComponent } from './shop/product/product.component';
import { HoneyComponent } from './honey/honey/honey.component';
import { HtmlSanitizerPipe } from './pipes/html-sanitizer.pipe';
import { BlogPostComponent } from './honey/blog-post/blog-post.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ImageSliderComponent,
    AboutUsComponent,
    ColorBeePipe,
    FooterComponent,
    HomePageComponent,
    ShopListComponent,
    CartComponent,
    ProductComponent,
    HoneyComponent,
    HtmlSanitizerPipe,
    BlogPostComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutesModule,
    NgbModalModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
