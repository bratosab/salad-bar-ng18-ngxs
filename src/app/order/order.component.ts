import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { SaladService } from '../providers/salad.service';
import { Router } from '@angular/router';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { Store } from '@ngxs/store';
import { SetName, SetTel } from '../store/order.action';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrl: './order.component.css',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        MatFormField,
        MatLabel,
        MatInput,
        MatError,
        NgIf,
        MatButton,
    ],
})
export class OrderComponent implements OnInit {
  orderForm!: FormGroup;

  private fb = inject(FormBuilder);
  private saladService = inject(SaladService);
  private router = inject(Router);
  private store = inject(Store)

  // constructor(
  //   private fb: FormBuilder,
  //   private saladService: SaladService,
  //   private router: Router
  // ) {}

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      name: ['', Validators.required],
      tel: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get telControl() {
    return this.orderForm.get('tel');
  }

  startOrder() {
    if (this.orderForm.valid) {
      // this.saladService.name = this.orderForm.value.name;
      // this.saladService.tel = this.orderForm.value.tel;
      this.store.dispatch(new SetName(this.orderForm.value.name))
      this.store.dispatch(new SetTel(this.orderForm.value.tel))

      this.router.navigate(['salad']);
    }
  }
}
