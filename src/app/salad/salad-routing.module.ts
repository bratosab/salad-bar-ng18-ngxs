import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaladComponent } from './salad.component';
import { saladGuard } from '../core/salad.guard';
import { toppingsResolver } from '../core/toppings.resolver';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaladRoutingModule {}
