import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { toppingsResolver } from './toppings.resolver';
import { Observable } from 'rxjs';
import { Topping } from '../models/topping.model';

describe('toppingsResolver', () => {
  const executeResolver: ResolveFn<Observable<Topping[]>> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => toppingsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
