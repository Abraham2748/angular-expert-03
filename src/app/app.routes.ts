import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { SignalsDemoComponent } from './signals-demo/signals-demo.component';
import { ClickCounterComponent } from './click-counter/click-counter.component';

export const routes: Routes = [
  {
    path: 'counter',
    component: CounterComponent,
  },
  {
    path: 'signals-demo',
    component: SignalsDemoComponent,
  },
  {
    path: 'click-counter',
    component: ClickCounterComponent,
  },
];
