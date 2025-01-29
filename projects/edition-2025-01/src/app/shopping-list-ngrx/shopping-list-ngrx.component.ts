import { Component } from '@angular/core';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemListComponent } from './item-list/item-list.component';

@Component({
  selector: 'app-shopping-list-ngrx',
  standalone: true,
  imports: [AddItemComponent, ItemListComponent],
  templateUrl: './shopping-list-ngrx.component.html',
  styleUrl: './shopping-list-ngrx.component.css',
})
export class ShoppingListNgrxComponent {}
