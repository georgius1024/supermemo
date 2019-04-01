import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { CourseService, VocabularyItem, random } from '../Services/course.service';
const numberOfOptions = 5;
@Component({
  selector: 'app-interaction-translation',
  templateUrl: './translation.component.html'
})
export class TranslationComponent implements OnInit, OnChanges {
  @Input() input: VocabularyItem;
  @Output() outcome = new EventEmitter<boolean>();
  public vocabulary: VocabularyItem[] = [];
  public response: string;
  constructor(private courseService: CourseService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.buildList();
  }
  buildList() {
    if (this.input) {
      const list = this.courseService.getPortion(numberOfOptions, [this.input])
      this.vocabulary = [this.input, ...list].sort(random);
    } else {
      this.vocabulary = [];
    }
  }
  onSubmit() {
    this.outcome.emit(this.correctResponse());
  }

  setResponse(item: VocabularyItem) {
    this.response = item.translation;
  }

  validResponse(): boolean {
    return Boolean(this.response);
  }

  correctResponse(): boolean {
    return this.validResponse() && (this.response === this.input.translation);
  }

}
