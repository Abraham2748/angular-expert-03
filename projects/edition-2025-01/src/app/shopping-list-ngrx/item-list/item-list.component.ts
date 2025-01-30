import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectItemList } from '../store/ngrx.selectors';
import { AsyncPipe } from '@angular/common';
import { deleteItem, editItem } from '../store/ngrx.actions';
import { Subscription, take } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-item-list',
  imports: [AsyncPipe],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css',
})
export class ItemListComponent {
  store = inject(Store);

  itemList$ = this.store.select(selectItemList);

  itemList: string[] = [];
  itemListSubscription = this.itemList$
    .pipe(takeUntilDestroyed())
    .subscribe((list) => {
      this.itemList = list;
    });

  edit(index: number) {
    const oldItemValue = this.itemList[index];
    const newItemValue = prompt(
      `Ingresa un nuevo valor para "${oldItemValue}"`
    )!;
    this.store.dispatch(editItem({ index, newValue: newItemValue }));
  }

  delete(index: number) {
    this.store.dispatch(deleteItem({ index }));
  }
}
