import { Component, inject } from '@angular/core';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { Store } from '@ngrx/store';
import { selectItemFromDB } from './store/ngrx.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-shopping-list-ngrx',
  imports: [AddItemComponent, ItemListComponent],
  templateUrl: './shopping-list-ngrx.component.html',
  styleUrl: './shopping-list-ngrx.component.css',
})
export class ShoppingListNgrxComponent {
  store = inject(Store);

  //itemFromDB$ = this.store.select(selectItemFromDB);
}
