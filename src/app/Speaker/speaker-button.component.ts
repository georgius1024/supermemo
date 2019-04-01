import { Component, Input } from '@angular/core';
import { SpeakerService } from './speaker.service';


@Component({
  selector: 'app-speaker-button',
  templateUrl: './speaker-button.component.html',
  styleUrls: ['./speaker-button.component.scss']
})
export class SpeakerButtonComponent {
  @Input() word: string;
  constructor(private speakerService: SpeakerService) { }

  click() {
    this.speakerService.speak(this.word);
  }

}
