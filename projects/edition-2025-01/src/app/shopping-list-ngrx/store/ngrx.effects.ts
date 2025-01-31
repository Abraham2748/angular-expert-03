import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getItemFromDBAction,
  getItemFromDBSuccessAction,
} from './ngrx.actions';
import { map, mergeMap } from 'rxjs';

@Injectable()
export class NgrxEffect {
  actions$ = inject(Actions);
  http$ = inject(HttpClient);

  getItemFromDB$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getItemFromDBAction),
      mergeMap(() =>
        this.http$
          .get('https://jsonplaceholder.typicode.com/todos/2')
          .pipe(
            map((todo: any) =>
              getItemFromDBSuccessAction({ itemFromDB: todo.title })
            )
          )
      )
    )
  );
}

//------1----------2----------3----------4---------5---------6-----
//---C----------------------R-------------------------------------------
//---------C1----------C2---C3---C4---R1-----------------------------R2- mergeMap
//--------------C1-----C2----C3----C4---C5----------R1------------------ exhaustMap
//---C1-----C2---------C3---R1------R2-----------R3--------------------- concatMap
