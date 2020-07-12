import {Component, Input, OnInit} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'price-display',
  template: `
  <div class="price-display">\${{ price }}</div>
  `
})
export class PriceDisplayComponent implements OnInit {

  @Input() price: number;

  constructor() { }

  ngOnInit() {
  }

}
