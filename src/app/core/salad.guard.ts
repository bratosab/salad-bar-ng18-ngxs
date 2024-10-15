import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SaladService } from '../providers/salad.service';

export const saladGuard: CanActivateFn = (route, state) => {
  const saladService = inject(SaladService);
  const router = inject(Router);

  if(saladService.name && saladService.tel) {
    return true;
  } else {
    router.navigate(['/'])
    return false;
  }
};
