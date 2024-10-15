import { Routes } from '@angular/router';
import { SaladComponent } from './salad.component';
import { saladGuard } from '../core/salad.guard';
import { toppingsResolver } from '../core/toppings.resolver';

export const saladRoutes: Routes = [
  {
    path: 'salad',
    component: SaladComponent,
    canActivate: [saladGuard],
    resolve: { data: toppingsResolver },
  },
];
