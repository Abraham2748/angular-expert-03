import { Component, inject, OnInit } from '@angular/core';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { Store } from '@ngrx/store';
import { selectItemFromDB } from './store/ngrx.selectors';
import { AsyncPipe } from '@angular/common';
import { getItemFromDBAction } from './store/ngrx.actions';

@Component({
  selector: 'app-shopping-list-ngrx',
  imports: [AddItemComponent, ItemListComponent, AsyncPipe],
  templateUrl: './shopping-list-ngrx.component.html',
  styleUrl: './shopping-list-ngrx.component.css',
})
export class ShoppingListNgrxComponent implements OnInit {
  store = inject(Store);

  itemFromDB$ = this.store.select(selectItemFromDB);

  ngOnInit(): void {
    this.store.dispatch(getItemFromDBAction());
  }
}
