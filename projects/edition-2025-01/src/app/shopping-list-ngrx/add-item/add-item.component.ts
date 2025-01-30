import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { saveItem } from '../store/ngrx.actions';

@Component({
  selector: 'app-add-item',
  imports: [],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css',
})
export class AddItemComponent {
  store = inject(Store);
  save(newItemInput: HTMLInputElement) {
    this.store.dispatch(saveItem({ newValue: newItemInput.value }));
    newItemInput.value = '';
    newItemInput.focus();
  }
}
