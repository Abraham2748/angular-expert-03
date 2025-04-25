import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals-demo',
  imports: [],
  templateUrl: './signals-demo.component.html',
  styleUrl: './signals-demo.component.css',
})
export class SignalsDemoComponent {
  quantity = signal(2);
  price = signal(50);

  total = computed(() => this.quantity() * this.price());

  incrementQuantity() {
    this.quantity.update((current) => current + 1);
  }

  incrementPrice() {
    this.price.update((current) => current + 10);
  }
}
