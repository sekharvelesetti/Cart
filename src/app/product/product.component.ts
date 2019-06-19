import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private product: ProductsService) { }

  ngOnInit() {
  }
  getProducts(){
    // console.log(this.product.getPros());
    return this.product.getPros();
  }
}