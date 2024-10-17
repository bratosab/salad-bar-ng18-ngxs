import { TestBed } from '@angular/core/testing';
import { provideStore, Store } from '@ngxs/store';
import { SaladState } from '../salad/store/salad.state';
import { SetName, SetTel } from './order.action';
import { OrderState, OrderStateModel } from './order.state';
import { SaladStore } from '../utils/store.utils';

describe('OrderState', () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideStore([OrderState])],
    });

    store = TestBed.inject(Store);
  });

  it('should set name', () => {
    store.dispatch(new SetName('Magic Mike'));

    // const name = store.selectOrderSnapshot(
    //   (state) => state.order.name
    // );

    const name = store.selectSnapshot(
      (state: { order: OrderStateModel }) => state.order.name
    );
    expect(name).toBe('Magic Mike');
  });

  it('should set tel', () => {
    store.dispatch(new SetTel('01011010101011'));

    const name = store.selectSnapshot((state) => state.order.tel);
    expect(name).toBe('01011010101011');
  });
});
