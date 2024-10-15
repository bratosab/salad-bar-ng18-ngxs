import { Component, inject, OnInit } from '@angular/core';
import { SaladService } from '../providers/salad.service';
import { Topping } from '../models/topping.model';
import { MatSelectionListChange } from '@angular/material/list';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-salad',
  templateUrl: './salad.component.html',
  styleUrl: './salad.component.css'
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

    this.activatedRoute.data.subscribe(({ toppings }) => {
      console.log('from resolver', toppings)
    })
  }

  chooseTopping(selectedTopping: Topping) {

    console.log(selectedTopping)
  }
}
