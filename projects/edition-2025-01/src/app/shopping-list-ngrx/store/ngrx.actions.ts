import { createAction, props } from '@ngrx/store';

export const saveItem = createAction(
  '[Add Item] Save a new Item',
  props<{ newValue: string }>()
);

export const editItem = createAction(
  '[Item List] Updates an existing Item',
  props<{ index: number; newValue: string }>()
);

export const deleteItem = createAction(
  '[Item List] Deletes an Item',
  props<{ index: number }>()
);

export const getItemFromDBAction = createAction(
  '[Shopping List Ngrx] Gets an item from an API'
);

export const getItemFromDBSuccessAction = createAction(
  '[Shopping List Ngrx] Get an item from an API was success',
  props<{ itemFromDB: string }>()
);
