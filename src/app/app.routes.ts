import { Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { SaladComponent } from './salad/salad.component';
import { saladGuard } from './core/salad.guard';
import { toppingsResolver } from './core/toppings.resolver';
import { saladRoutes } from './salad/salad.routes';

export const routes: Routes = [
    { path: '', component: OrderComponent },
    {
      path: 'kitchen',
      loadComponent: () =>
        import('./kitchen/kitchen.component').then((c) => c.KitchenComponent),
    },
    ...saladRoutes
  ];