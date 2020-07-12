import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../product.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'products-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {

  @Input() productList: Product[];

  @Output() onProductSelected: EventEmitter<Product>;

  private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  clicked(product: Product) {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}
