import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SaladService } from '../providers/salad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent implements OnInit {
  orderForm!: FormGroup;

  private fb = inject(FormBuilder);
  private saladService = inject(SaladService);
  private router = inject(Router);

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
      this.saladService.name = this.orderForm.value.name;
      this.saladService.tel = this.orderForm.value.tel;

      this.router.navigate(['salad']);
    }
  }
}
