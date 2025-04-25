import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const ShoppingCartStore = signalStore(
  {
    providedIn: 'root',
  },
  withState(initialState),
  withComputed(({ items }) => ({
    totalItems: computed(() =>
      items().reduce((sum, item) => sum + item.quantity, 0)
    ),
    totalPrice: computed(() =>
      items().reduce((sum, item) => sum + item.price * item.quantity, 0)
    ),
  })),
  withMethods((store) => ({
    addItem(item: CartItem) {
      const existingItem = store.items().find((i) => i.id === item.id);
      if (existingItem) {
        patchState(store, {
          items: store.items().map((i) => {
            if (i.id === existingItem.id) {
              i.quantity = i.quantity + item.quantity;
              i.price = i.quantity * item.price;
            }
            return i;
          }),
        });
      } else {
        patchState(store, { items: [...store.items(), item] });
      }
    },
    removeItem(itemId: string) {
      const newList = store.items().filter((i) => i.id !== itemId);
      patchState(store, { items: newList });
    },
    clearCart() {
      patchState(store, { items: [] });
    },
  }))
);
