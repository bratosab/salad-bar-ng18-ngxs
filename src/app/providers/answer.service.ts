import { Injectable } from '@angular/core';
const mathWorker = new Worker(
  new URL('../workers/math-worker.js', import.meta.url)
);

@Injectable({
  providedIn: 'root',
})
export class AnswerService {
  constructor() {}

  getAnswer() {
    let sum = 0;
    for (let i = 0; i < 10000000000; i++) {
      sum++;
    }
    return 42;
  }

  getAnswerByMathWorker(callback: (value: number) => void) {
    mathWorker.onmessage = (e) => {
      callback(e.data);
    };
    mathWorker.postMessage('answer');
  }
}
