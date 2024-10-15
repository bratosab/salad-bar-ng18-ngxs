import { Component, inject } from '@angular/core';
import { SaladService } from '../providers/salad.service';

@Component({
  selector: 'app-salad',
  templateUrl: './salad.component.html',
  styleUrl: './salad.component.css'
})
export class SaladComponent {
  saladService = inject(SaladService);
}
