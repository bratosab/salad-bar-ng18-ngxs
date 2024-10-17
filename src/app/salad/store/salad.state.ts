import { Injectable } from '@angular/core';
import { Topping } from '../../models/topping.model';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ChooseTopping, FetchToppings, Toppings } from './salad.action';
import { SaladService } from '../../providers/salad.service';
import { catchError, of, tap } from 'rxjs';

export interface SaladStateModel {
  toppings: Topping[];
  chosenToppings: Topping[];
  error: string | null;
}

@State<SaladStateModel>({
  name: 'salad',
  defaults: {
    toppings: [],
    chosenToppings: [],
    error: null,
  },
})
@Injectable()
export class SaladState {
  constructor(private saladService: SaladService) {}

  @Selector()
  static getTotalPrice(state: SaladStateModel) {
    return state.chosenToppings.reduce((total, topping) => {
      return (total + topping.price);
    }, 0);
  }

  @Action(ChooseTopping)
  chooseTopping(ctx: StateContext<SaladStateModel>, action: ChooseTopping) {
    const state = ctx.getState();
    ctx.patchState({
      chosenToppings: [...state.chosenToppings, action.topping],
    });
  }

  @Action(FetchToppings)
  fetchToppings(ctx: StateContext<SaladStateModel>) {
    return this.saladService.getToppings().pipe(
      tap((toppings) => {
        ctx.patchState({
          toppings,
        });
      })
    );
  }

  @Action(Toppings.Fetch)
  fetchToppings2(ctx: StateContext<SaladStateModel>) {
    return this.saladService.getToppings().pipe(
      tap((toppings) => {
        ctx.dispatch(new Toppings.Success(toppings));
      }),
      catchError((err) => {
        console.error(err);
        ctx.dispatch(new Toppings.Error(err));
        return of(ctx.getState().toppings);
      })
    );
  }

  @Action(Toppings.Success)
  fetchToppingsSuccess(
    ctx: StateContext<SaladStateModel>,
    action: Toppings.Success
  ) {
    ctx.patchState({
      toppings: [...action.toppings],
    });
  }

  @Action(Toppings.Error)
  fetchToppingsError(
    ctx: StateContext<SaladStateModel>,
    action: Toppings.Error
  ) {
    ctx.patchState({
      error: action.error.message,
    });
  }
}
