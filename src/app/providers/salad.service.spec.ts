import { TestBed } from '@angular/core/testing';
import { SaladService } from './salad.service';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { Topping } from '../models/topping.model';

describe('SaladService', () => {
  let service: SaladService;
  let httpTestController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(SaladService);
    httpTestController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getToppings() should return toppings list', (done: DoneFn) => {
    const mockToppings: Topping[] = [
      {
        id: 1,
        name: 'Cheese',
        price: 2,
      },
      {
        id: 2,
        name: 'Bacon',
        price: 2,
      },
      {
        id: 3,
        name: 'Pineapple',
        price: 4,
      },
    ];

    service.getToppings().subscribe((toppings) => {
      expect(toppings).toEqual(mockToppings);
      done();
    });

    const intercept = httpTestController.expectOne(
      'https://retoolapi.dev/udhTkG/toppings'
    );

    expect(intercept.request.method).toEqual('GET');
    intercept.flush(mockToppings);
    
    httpTestController.verify();
  });
});
