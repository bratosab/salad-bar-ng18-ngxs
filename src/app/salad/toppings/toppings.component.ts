import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { Topping } from '../../models/topping.model';

@Component({
  selector: 'app-toppings',
  templateUrl: './toppings.component.html',
  styleUrl: './toppings.component.css'
})
export class ToppingsComponent {
  @Input()
  toppings: Topping[] = [];

  @Output()
  selectTopping = new EventEmitter<Topping>();

  chooseTopping(event: MatSelectionListChange) {
    const selectedTopping = event.source.selectedOptions.selected[0].value

    this.selectTopping.emit(selectedTopping);
  }
}
