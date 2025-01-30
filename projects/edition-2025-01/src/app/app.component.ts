import { Component } from '@angular/core';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListNgrxComponent } from './shopping-list-ngrx/shopping-list-ngrx.component';

@Component({
  selector: 'app-root',
  imports: [ShoppingListComponent, ShoppingListNgrxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'edition-2025-01';
}
