import { Injectable } from '@angular/core';
import { Topping } from '../../models/topping.model';
import { Action, State, StateContext } from '@ngxs/store';
import { ChooseTopping, FetchToppings } from './salad.action';
import { SaladService } from '../../providers/salad.service';
import { tap } from 'rxjs';

export interface SaladStateModel {
  toppings: Topping[];
  chosenToppings: Topping[];
}

@State({
  name: 'salad',
  defaults: {
    toppings: [],
    chosenToppings: [],
  },
})
@Injectable()
export class SaladState {
  constructor(private saladService: SaladService) {}

  @Action(ChooseTopping)
  chooseTopping(ctx: StateContext<SaladStateModel>, action: ChooseTopping) {
    const state = ctx.getState();
    ctx.patchState({
      chosenToppings: [...state.chosenToppings, action.topping],
    });
  }

  @Action(FetchToppings)
  fetchToppings(ctx: StateContext<SaladStateModel>, action: FetchToppings) {
    return this.saladService.getToppings().pipe(
      tap((toppings) => {
        ctx.patchState({
          toppings,
        });
      })
    );
  }
}
