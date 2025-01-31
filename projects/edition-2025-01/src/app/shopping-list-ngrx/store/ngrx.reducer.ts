import {
  deleteItem,
  editItem,
  getItemFromDBSuccessAction,
  saveItem,
} from './ngrx.actions';
import { NgRxState } from './ngrx.models';
import { createReducer, on } from '@ngrx/store';

const initialState: NgRxState = {
  itemList: [],
  itemFromDB: '',
};

export const ngrxReducer = createReducer(
  initialState,
  on(saveItem, (state, { newValue }) => {
    const newList = [...state.itemList];
    newList.push(newValue);
    return { ...state, itemList: newList };
  }),
  on(editItem, (state, { index, newValue }) => {
    const newList = [...state.itemList];
    newList[index] = newValue;
    return { ...state, itemList: newList };
  }),
  on(deleteItem, (state, { index }) => {
    const newList = [...state.itemList];
    newList.splice(index, 1);
    return { ...state, itemList: newList };
  }),
  on(getItemFromDBSuccessAction, (state, { itemFromDB }) => {
    return { ...state, itemFromDB };
  })
);
