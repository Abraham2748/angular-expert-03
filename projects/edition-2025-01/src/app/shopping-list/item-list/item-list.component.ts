import { Component, inject } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
    selector: 'app-item-list',
    imports: [],
    templateUrl: './item-list.component.html',
    styleUrl: './item-list.component.css'
})
export class ItemListComponent {
  shoppingListService = inject(ShoppingListService);

  edit(index: number) {
    const oldItemValue = this.shoppingListService.itemList[index];
    const newItemValue = prompt(
      `Ingresa un nuevo valor para "${oldItemValue}"`
    )!;
    this.shoppingListService.itemList[index] = newItemValue;
  }

  delete(index: number) {
    this.shoppingListService.itemList.splice(index, 1);
  }
}
