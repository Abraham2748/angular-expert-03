import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { SignalsDemoComponent } from './signals-demo/signals-demo.component';

export const routes: Routes = [
  {
    path: 'counter',
    component: CounterComponent,
  },
  {
    path: 'signals-demo',
    component: SignalsDemoComponent,
  },
];
