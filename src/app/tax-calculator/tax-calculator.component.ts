import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-tax-calculator',
  imports: [],
  templateUrl: './tax-calculator.component.html',
  styleUrl: './tax-calculator.component.css',
})
export class TaxCalculatorComponent {
  // Señales de entrada
  base = signal(100);
  taxRate = signal(0.15);

  //Señales computadas encadenadas
  taxAmount = computed(() => this.base() * this.taxRate());
  total = computed(() => this.base() + this.taxAmount());

  //Efecto reactivo: log cada vez que cambia 'total'
  logEffect = effect(() =>
    console.log('Total actualizado: $' + this.total().toFixed(2))
  );
  persistBase = effect(() => {
    localStorage.setItem('base', this.base().toString());
  });
  persistTaxRate = effect(() => {
    localStorage.setItem('taxRate', this.taxRate().toString());
  });

  //Métodos para actualizas las señales desde la plantilla
  updateBase(event: Event) {
    this.base.set(this.getValidNumber(event));
  }
  updateTaxRate(event: Event) {
    this.taxRate.set(this.getValidNumber(event) / 100);
  }

  getValidNumber(event: Event) {
    const raw = this.getValueFromInput(event);
    const parsed = Number(raw);
    return !isNaN(parsed) && parsed >= 0 ? parsed : 0;
  }

  getValueFromInput(event: Event) {
    const target = event.target as HTMLInputElement;
    return target.value;
  }
}
