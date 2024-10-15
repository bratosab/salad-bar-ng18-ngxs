import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'salad-bar';

  logChangeDetection() {
    console.log('AppComponent rendered');
    return true;
  }
}
