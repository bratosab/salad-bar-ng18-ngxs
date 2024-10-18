import { Component, inject } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { AnswerService } from './providers/answer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [MatToolbar, MatIconButton, MatIcon, RouterLink, RouterOutlet, NgIf],
})
export class AppComponent {
  title = 'salad-bar';
  answerService = inject(AnswerService);

  logChangeDetection() {
    console.log('AppComponent rendered');
    return true;
  }


  getAnswer() {
    alert(`The anwser to life is : ${this.answerService.getAnswer()}`);
  }

  getAnswerFromWorker() {
    this.answerService.getAnswerByMathWorker((value) => {
      alert(`The anwser to life is : ${value}`);
    });
  }
}
