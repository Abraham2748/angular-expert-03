import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-click-counter',
  imports: [],
  templateUrl: './click-counter.component.html',
  styleUrl: './click-counter.component.css',
})
export class ClickCounterComponent {
  //Validación al leer localStorage
  getValidInitialClickCount() {
    const raw = localStorage.getItem('clickCount');
    const parsed = Number(raw);
    return !isNaN(parsed) && parsed >= 0 ? parsed : 0;
  }

  clickCount = signal(this.getValidInitialClickCount());

  incrementClickCount() {
    this.clickCount.update((count) => count + 1);
  }

  resetClickCount() {
    this.clickCount.set(0);
  }

  constructor() {
    effect(() => {
      console.log('🖱️ Total de clicks: ', this.clickCount());
      localStorage.setItem('clickCount', this.clickCount().toString());
    });
  }
}
