import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { VocabularyItem } from '../course.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-interaction-translation-iterator',
  templateUrl: './translation-iterator.component.html'
})
export class TranslationIteratorComponent implements OnInit, OnChanges {
  @Input() words: VocabularyItem[];
  @Output() complete = new EventEmitter<VocabularyItem[]>();
  public position = 0;
  public vocabulary: VocabularyItem[];
  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.position = 0;
    this.vocabulary = [...this.words];
  }

  ngOnChanges() {
    this.vocabulary = [...this.words];
  }

  translated(outcome: boolean) {
    if (!outcome) {
      this.vocabulary[this.position].errors = this.vocabulary[this.position].errors ? this.vocabulary[this.position].errors + 1 : 1;
      this.alertService.add({
        className: 'warning ',
        message: `Неправильно`,
        timeout: 1000
      });
    } else {
      this.alertService.add({
        className: 'info',
        message: `Правильно`,
        timeout: 1000
      });
    }
    setTimeout(() => {
      this.position += 1;
      if (this.position === this.vocabulary.length) {
        this.complete.emit(this.vocabulary);
      }
    }, 1000);
  }

}
