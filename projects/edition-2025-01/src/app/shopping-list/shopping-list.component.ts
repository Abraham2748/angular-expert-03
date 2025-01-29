import { Component } from '@angular/core';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemListComponent } from './item-list/item-list.component';

@Component({
    selector: 'app-shopping-list',
    imports: [AddItemComponent, ItemListComponent],
    templateUrl: './shopping-list.component.html',
    styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {}
