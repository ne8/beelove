import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsDataService } from './providers/products-data.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  addedProductsToCart: Product[];
  availableProducts: Product[];
  constructor(public productDataService: ProductsDataService) {
    this.addedProductsToCart = [];
    this.availableProducts = []
   }

  ngOnInit() {
    // this.addToCart();
    this.productDataService.getProucts().subscribe((result: any) => {
      this.availableProducts = result;
      console.log(this.availableProducts);
    });
  }


  // <!-- <app-cart name="Miere propolis" quantity="1" price="10" pathToImage="assets/images/products/miere-propolis.jpg" alt="Miere propolis"></app-cart> -->

  addToCart(){
    let firstProduct: Product=new Product("yolo-id","Miere propolis", 10, 1,"assets/images/products/miere-propolis.jpg",
    "<p>Lorem <strong>ipsum</strong> dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue.</p>"
    );
    this.addedProductsToCart.push(firstProduct);
    this.availableProducts.push(firstProduct);
    this.availableProducts.push(firstProduct);
  }


  handleProduct(product) {
    this.addedProductsToCart.push(product);
  }
}
