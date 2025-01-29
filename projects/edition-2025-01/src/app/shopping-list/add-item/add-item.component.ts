import { Component, inject } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css',
})
export class AddItemComponent {
  shoppingListService = inject(ShoppingListService);

  save(newItemInput: HTMLInputElement) {
    this.shoppingListService.itemList.push(newItemInput.value);
    newItemInput.value = '';
    newItemInput.focus();
  }
}
