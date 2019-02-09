import {
  Component,
  OnInit,
  Input,
  DoCheck,
  IterableDiffers
} from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, DoCheck {
  @Input() products: Product[];

  totalPrice: number;
  storageProducts: Product[];
  constructor(public differs: IterableDiffers) {}

  ngOnInit() {
    // this.products.push(JSON.parse(sessionStorage.getItem('cart2')));
    this.storageProducts = JSON.parse(sessionStorage.getItem('cart'));
    if (this.storageProducts.length >= 1) {
      for (const product of this.storageProducts) {
        this.products.push(product);
      }
    }
  }

  ngDoCheck() {
    const changes = this.differs.find(this.products);
    if (changes) {
      this.calculateTotal();
      sessionStorage.setItem('cart', JSON.stringify(this.products));
    }
  }

  calculateTotal() {
    this.totalPrice = 0;
    for (const product of this.products) {
      this.totalPrice += product.price * product.quantity;
    }
  }

  removeItem(product: Product) {
    const index = this.products.indexOf(product);
    if (index > -1) {
      this.products.splice(index, 1);
    }
    this.calculateTotal();
  }
  handleResult(result: Product[]) {
    if (result.length < 1) {
      this.products = [];
    }
  }
}
