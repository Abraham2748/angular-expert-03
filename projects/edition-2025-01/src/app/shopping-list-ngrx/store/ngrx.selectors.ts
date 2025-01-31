import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NgRxState } from './ngrx.models';

const selectMainState = createFeatureSelector<NgRxState>('main');

export const selectItemList = createSelector(
  selectMainState,
  (state) => state.itemList
);

export const selectItemFromDB = createSelector(
  selectMainState,
  (state) => state.itemFromDB
);

export const selectItemByIndex = (index: number) =>
  createSelector(selectMainState, (state) => state.itemList[index]);
