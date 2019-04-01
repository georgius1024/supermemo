import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
  private wordEmitter = new Subject<string>();
  public words$: Observable<string> = this.wordEmitter.asObservable();

  constructor() { }

  speak(word: string) {
    this.wordEmitter.next(word);
  }
}
