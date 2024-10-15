import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { toppingsResolver } from './toppings.resolver';

describe('toppingsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => toppingsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
