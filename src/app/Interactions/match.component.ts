import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { VocabularyItem, random } from '../Services/course.service';

@Component({
  selector: 'app-interaction-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})

export class MatchComponent implements OnInit, OnChanges {
  @Input() words: VocabularyItem[];
  @Output() outcome = new EventEmitter<boolean>();
  public randomizedList: VocabularyItem[];

  constructor() {
  }

  ngOnInit() {
    this.buildList();
  }

  ngOnChanges() {
    this.buildList();
  }

  buildList() {
    if (this.words.length) {
      this.randomizedList = [...this.words];
      this.randomizedList.sort(random);
    } else {
      this.randomizedList = [];
    }
  }

  onSubmit() {
    this.outcome.emit(this.correctResponse());
  }

  correctResponse(): boolean {
    let errors = 0;
    this.randomizedList.forEach((item: VocabularyItem, index: number) => {
      if (this.words[index].word !== item.word) {
        errors++;
      }
    });
    return errors === 0;
  }

}
