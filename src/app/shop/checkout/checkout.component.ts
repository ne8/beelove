import { Component, OnInit, Input } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  @Input() products: Product[];


  checkoutForm: FormGroup;

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    this.checkoutForm = new FormGroup({
      'userData': new FormGroup({
        'firstName': new FormControl(null, [Validators.required]),
        'lastName': new FormControl(null, [Validators.required]),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'address': new FormGroup({
        'city': new FormControl(null, [Validators.required]),
        'postalCode':  new FormControl(null, [Validators.required]),
        'phone': new FormControl(null, [Validators.required, Validators.minLength(6)]),
        'street': new FormControl(null, [Validators.required, Validators.minLength(6)])
      }),
      'order': new FormGroup({
          'productId': new FormControl(null, [Validators.required]),
          'productName': new FormControl(null, [Validators.required]),
          'quantity':  new FormControl(null, [Validators.required]),
          'price': new FormControl(null,[Validators.required]),
          'total': new FormControl(null,[Validators.required])
      })
    })
  }
  onSubmit() {
    this.checkoutForm.value["order"]=this.products;
    console.log(this.checkoutForm.value);


  }
  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }

}
