import { ResolveFn } from '@angular/router';
import { Topping } from '../models/topping.model';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { SaladService } from '../providers/salad.service';

export const toppingsResolver: ResolveFn<Observable<Topping[]>> = (
  route,
  state
) => {
  const saladService = inject(SaladService);
  return saladService.getToppings();
};
