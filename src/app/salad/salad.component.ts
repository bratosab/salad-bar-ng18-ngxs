import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { SaladService } from '../providers/salad.service';
import { Topping } from '../models/topping.model';
import { MatSelectionListChange } from '@angular/material/list';
import { ActivatedRoute } from '@angular/router';
import { NgIf, AsyncPipe, CurrencyPipe } from '@angular/common';
import { ToppingsComponent } from './toppings/toppings.component';
import { Store } from '@ngxs/store';
import { OrderStateModel } from '../store/order.state';
import { ChooseTopping, FetchToppings, Toppings } from './store/salad.action';
import { SaladState, SaladStateModel } from './store/salad.state';

@Component({
  selector: 'app-salad',
  templateUrl: './salad.component.html',
  styleUrl: './salad.component.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, ToppingsComponent, AsyncPipe, CurrencyPipe],
})
export class SaladComponent implements OnInit {
  // saladService = inject(SaladService);
  //  toppings: Topping[] = [];
  // toppings$ = this.saladService.getToppings();
  private activatedRoute = inject(ActivatedRoute);
  private store = inject(Store);

  toppings$ = this.store.select<SaladStateModel['toppings']>(
    (state) => state.salad.toppings
  );
  name = this.store.selectSignal<OrderStateModel['name']>(
    (state) => state.order.name
  );

  totalPrice = this.store.selectSignal<number>(SaladState.getTotalPrice);

  ngOnInit() {
    // this.saladService.getToppings().subscribe(values => {
    //   this.toppings = values;
    // })

    this.activatedRoute.data.subscribe(({ data }) => {
      console.log('from resolver', data);
    });

    // this.store.dispatch(new FetchToppings()).subscribe({
    //   next: () => console.log('success !'),
    //   error: (err) => console.error('Something went wrong'),
    // });

    this.store.dispatch(new Toppings.Fetch())
  }

  chooseTopping(selectedTopping: Topping) {
    this.store.dispatch(new ChooseTopping(selectedTopping));
  }

  logChangeDetection() {
    console.log('SaladComponent rendered');
    return true;
  }
}
