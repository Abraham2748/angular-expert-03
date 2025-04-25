import { Component, inject } from '@angular/core';
import { ShoppingCartStore } from './shopping-cart.store';

@Component({
  selector: 'app-shopping-cart',
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
})
export class ShoppingCartComponent {
  store = inject(ShoppingCartStore);

  addItem() {
    this.store.addItem({
      id: '1',
      name: 'Producto de prueba',
      price: 100,
      quantity: 1,
    });
  }
}
