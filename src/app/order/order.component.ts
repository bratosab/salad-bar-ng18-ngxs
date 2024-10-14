import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
  orderForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      name: ['', Validators.required],
      tel: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get telControl() {
    return this.orderForm.controls['tel'];
  }

  startOrder() {
    console.log(this.orderForm.value);
  }
}
