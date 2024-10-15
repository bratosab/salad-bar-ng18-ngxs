import { Component, inject, OnInit } from '@angular/core';
import { SaladService } from '../providers/salad.service';
import { Topping } from '../models/topping.model';

@Component({
  selector: 'app-salad',
  templateUrl: './salad.component.html',
  styleUrl: './salad.component.css'
})
export class SaladComponent implements OnInit {
  saladService = inject(SaladService);
  toppings: Topping[] = [];

  ngOnInit() {
    this.saladService.getToppings().subscribe(values => {
      this.toppings = values;
    })
  }
}
