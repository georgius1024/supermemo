import { Input, Output, Component, OnInit, EventEmitter } from '@angular/core';
import { AlertService } from '../alert.service';
import { CourseService, VocabularyItem } from '../course.service';
import { WorkbookService } from '../workbook.service';

@Component({
  selector: 'app-word-selector',
  templateUrl: './WordSelector.component.html',
  styleUrls: ['./WordSelector.component.scss']
})
export class WordSelectorComponent implements OnInit {
  @Output() select = new EventEmitter<VocabularyItem[]>();

  public vocabulary: VocabularyItem[] = [];
  public testWord: VocabularyItem;
  constructor(
    private alertService: AlertService,
    private courseService: CourseService,
    private workbookService: WorkbookService
  ) { }

  ngOnInit() {
    this.refreshWords();
  }

  refreshWords() {
    this.vocabulary = this.courseService.getPortion(
      5,
      this.workbookService.getAll()
    );
  }

  requestConfirm(item: VocabularyItem) {
    this.testWord = item;
  }

  closeConfirmDialog() {
    this.testWord = null;
  }

  checkWordIsConfirmed(outcome: boolean) {
    if (outcome) {
      this.alertService.add({
        className: 'success',
        message: `Слово "${this.testWord.word}" уже изучено и исклчается из программы`,
        timeout: 1000
      });
      const items = this.courseService.getPortion(
        1,
        this.workbookService.getAll().concat(this.vocabulary)
      );
      if (items.length) {
        this.vocabulary.push(items[0]);
      }
      this.testWord.completed = true;
      this.testWord.last = new Date();
      this.workbookService.addPortion([this.testWord]);

      this.vocabulary = this.vocabulary.filter(
        e => e.word !== this.testWord.word
      );
    } else {
      this.alertService.add({
        className: 'warning',
        message: `Неправильный перевод слова "${this.testWord.word}"`,
        timeout: 1000
      });
    }
    this.closeConfirmDialog();
  }

  done() {
    this.select.emit(this.vocabulary);
    this.refreshWords();
  }
}
