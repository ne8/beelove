import { Component, OnInit, Input, OnChanges, DoCheck, IterableDiffers } from '@angular/core';
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


  constructor(public differs: IterableDiffers) { }

  ngOnInit() {
  }

  ngDoCheck(){
    const changes = this.differs.find(this.products);
    if (changes) {
      this.calculateTotal();
    }
  }

  calculateTotal() {
    this.totalPrice = 0;
    for(let product of this.products){
      this.totalPrice += product.price * product.quantity;
    }
  }

  removeItem(product: Product){
    const index = this.products.indexOf(product);
    if(index > -1){
      this.products.splice(index,1);
    }
    this.calculateTotal();
  }

}
