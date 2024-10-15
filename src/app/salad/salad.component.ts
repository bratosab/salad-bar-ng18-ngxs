import { Component, inject, OnInit } from '@angular/core';
import { SaladService } from '../providers/salad.service';
import { Topping } from '../models/topping.model';
import { MatSelectionListChange } from '@angular/material/list';
import { ActivatedRoute } from '@angular/router';
import { NgIf, AsyncPipe } from '@angular/common';
import { ToppingsComponent } from './toppings/toppings.component';

@Component({
    selector: 'app-salad',
    templateUrl: './salad.component.html',
    styleUrl: './salad.component.css',
    standalone: true,
    imports: [NgIf, ToppingsComponent, AsyncPipe]
})
export class SaladComponent implements OnInit {
  saladService = inject(SaladService);
  // toppings: Topping[] = [];
  toppings$ = this.saladService.getToppings();
  private activatedRoute = inject(ActivatedRoute)

  ngOnInit() {
    // this.saladService.getToppings().subscribe(values => {
    //   this.toppings = values;
    // })

    this.activatedRoute.data.subscribe(({ data }) => {
      console.log('from resolver', data)
    })
  }

  chooseTopping(selectedTopping: Topping) {

    console.log(selectedTopping)
  }

  logChangeDetection() {
    console.log('SaladComponent rendered');
    return true;
  }
}
