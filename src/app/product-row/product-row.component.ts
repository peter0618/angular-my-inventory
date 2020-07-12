import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Product} from '../product.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'product-row',
  templateUrl: './product-row.component.html',
})
export class ProductRowComponent implements OnInit {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'item';

  constructor() { }

  ngOnInit() {
  }

}
