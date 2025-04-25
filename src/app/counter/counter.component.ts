import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  counter = signal(0);

  increase() {
    this.counter.update((currentValue) => currentValue + 1);
  }

  decrease() {
    this.counter.update((currentValue) => currentValue - 1);
  }

  reset() {
    this.counter.set(0);
  }
}
