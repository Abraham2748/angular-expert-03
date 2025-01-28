import { inject, Injectable, signal } from '@angular/core';
import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints,
} from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  currentSize = signal('');

  private breakpointObserver = inject(BreakpointObserver);

  constructor() {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          if (state.breakpoints[Breakpoints.Small]) {
            this.currentSize.set('small');
          }
          if (state.breakpoints[Breakpoints.Medium]) {
            this.currentSize.set('medium');
          }
          if (state.breakpoints[Breakpoints.Large]) {
            this.currentSize.set('large');
          }
        }
      });

    console.log('Small: ', Breakpoints.Small);
    console.log('Medium: ', Breakpoints.Medium);
    console.log('Large: ', Breakpoints.Large);
  }
}
