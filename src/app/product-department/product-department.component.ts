import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../product.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'product-department',
  templateUrl: './product-department.component.html'
})
export class ProductDepartmentComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
