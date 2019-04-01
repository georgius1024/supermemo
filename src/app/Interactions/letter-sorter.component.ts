import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { VocabularyItem, random } from '../Services/course.service';

interface SortableLetter {
  letter: string;
  id: number;
}

@Component({
  selector: 'app-interaction-letter-sorter',
  templateUrl: './letter-sorter.component.html',
  styleUrls: ['./letter-sorter.component.scss']
})
export class LetterSorterComponent implements OnInit, OnChanges {

  @Input() input: VocabularyItem;
  @Output() outcome = new EventEmitter<boolean>();
  public vocabulary: VocabularyItem[] = [];
  randomized: SortableLetter[] = [];

  constructor() { }

  ngOnInit() {
    this.shuffle();
  }

  ngOnChanges() {
    this.shuffle();
  }

  shuffle() {
    this.randomized = this.input.word.split('').map((letter, id) => {
      return { letter, id }
    });
    this.randomized.sort(random);
  }

  onSubmit() {
    this.outcome.emit(this.correctResponse());
  }

  correctResponse(): boolean {
    return this.randomized.map(e => e.letter).join('') === this.input.word;
  }

}
