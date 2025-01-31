import { Component } from '@angular/core';
import { ShoppingListNgrxComponent } from './shopping-list-ngrx/shopping-list-ngrx.component';

@Component({
  selector: 'app-root',
  imports: [ShoppingListNgrxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'edition-2025-01';
}
