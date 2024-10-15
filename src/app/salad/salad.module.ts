import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaladRoutingModule } from './salad-routing.module';
import { SaladComponent } from './salad.component';
import { ToppingsComponent } from './toppings/toppings.component';
import { SharedMaterialModule } from '../shared-material.module';


@NgModule({
    imports: [
        CommonModule,
        SaladRoutingModule,
        SharedMaterialModule,
        SaladComponent,
        ToppingsComponent
    ]
})
export class SaladModule { }
