import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { Topping } from '../../models/topping.model';

@Component({
  selector: 'app-toppings',
  templateUrl: './toppings.component.html',
  styleUrl: './toppings.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
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

  trackToppings(_index: number, item: Topping) {
    return item.id;
  }

  logChangeDetection() {
    console.log('ToppingsComponent rendered');
    return true;
  }
}
