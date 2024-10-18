import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, InjectionToken, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnswerService {
  mathWorker!: Worker;

  constructor(@Inject(PLATFORM_ID) private platformId: InjectionToken<Object>) {
    if (isPlatformBrowser(this.platformId)) {
      this.mathWorker = new Worker(
        new URL('../workers/math-worker.js', import.meta.url)
      );
    }
  }

  getAnswer() {
    let sum = 0;
    for (let i = 0; i < 10000000000; i++) {
      sum++;
    }
    return 42;
  }

  getAnswerByMathWorker(callback: (value: number) => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.mathWorker.onmessage = (e) => {
        callback(e.data);
      };
      this.mathWorker.postMessage('answer');
    }
  }
}
