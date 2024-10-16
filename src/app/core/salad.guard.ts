import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SaladService } from '../providers/salad.service';
import { Store } from '@ngxs/store';
import { OrderStateModel } from '../store/order.state';

export const saladGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const store = inject(Store)

  const order = store.snapshot().order as OrderStateModel

  if(order.name && order.tel) {
    return true;
  } else {
    router.navigate(['/'])
    return false;
  }
};
