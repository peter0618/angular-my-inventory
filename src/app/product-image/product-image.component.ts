import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Product} from '../product.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'product-image',
  template: `
   <img class="product-image" [src]="product.imageUrl">
  `
})
export class ProductImageComponent implements OnInit {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'ui small image';

  constructor() { }

  ngOnInit() {
  }

}
