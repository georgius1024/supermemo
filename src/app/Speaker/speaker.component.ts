import { Component, Input, OnInit } from '@angular/core';
import { SpeakerService } from './speaker.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
})
export class SpeakerComponent implements OnInit {
  @Input() muted = false;
  private wordsSource: Subscription;
  public word: string;
  public url: string;
  private waiting: any;
  constructor(private speakerService: SpeakerService) { }

  ngOnInit() {
    this.wordsSource = this.speakerService.words$.subscribe((word: string) => {
      this.speak(word);
    });
  }
  speak(word: string) {
    if (this.waiting) {
      this.shutup();
    }
    setTimeout(() => {
      this.word = word;
      this.url = './assets/speech/' + word + '.mp3';
      this.waiting = setTimeout(() => {
        this.shutup();
      }, 30 * 1000);
    }, 100);
  }
  shutup() {
    clearTimeout(this.waiting);
    this.waiting = false;
    this.word = '';
    this.url = '';
  }
}
