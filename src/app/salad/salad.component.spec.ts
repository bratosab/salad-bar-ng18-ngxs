import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaladComponent } from './salad.component';
import { provideRouter, RouterModule } from '@angular/router';
import { provideStore } from '@ngxs/store';
import { SaladState } from './store/salad.state';
import { OrderState } from '../store/order.state';
import { provideHttpClient } from '@angular/common/http';
import { routes } from '../app.routes';

describe('SaladComponent', () => {
  let component: SaladComponent;
  let fixture: ComponentFixture<SaladComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaladComponent],
      providers: [
        provideHttpClient(),
        provideStore([SaladState, OrderState]),
        provideRouter([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SaladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have toppings', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-toppings')).toBeTruthy();
  });

  it('should have total price message', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('Total price :');
  });
});
