import { Component, Output, OnInit, OnChanges, EventEmitter } from '@angular/core';
import { VocabularyItem } from '../Services/course.service';
import { WorkbookService } from '../Services/workbook.service';
import { AlertService } from '../Alert/alert.service';
import { ConfigService, Config } from '../Config/config.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit, OnChanges {
  @Output() complete = new EventEmitter<void>();
  public vocabulary: VocabularyItem[] = [];
  public phase = 0;
  public matchPassed = false;
  public active = false;
  constructor(
    private workbookService: WorkbookService,
    private configService: ConfigService,
    private alertService: AlertService) { }
  config: Config;
  ngOnInit() {
    this.config = this.configService.get();
  }

  ngOnChanges() {
    this.config = this.configService.get();
  }

  start() {
    this.vocabulary = this
      .workbookService
      .getLessTrained(this.config.trainingLessonWordsQuantity)
      .map((item: VocabularyItem) => {
        item.errorsBefore = item.errors;
        return item;
      });
    this.phase = 0;
    this.matchPassed = false;
    this.active = true;
  }

  completePhase2(ok: boolean) {
    if (ok) {
      this.alertService.add({
        className: 'info',
        message: `Правильно`,
        timeout: 1000
      });
      setTimeout(() => {
        this.phase += 1;
      }, 1000);
    } else {
      this.alertService.add({
        className: 'warning ',
        message: `Неправильно`,
        timeout: 1000
      });
    }
  }

  completePhase3(list: VocabularyItem[]) {
    this.vocabulary = [...list];
    this.phase += 1;
  }

  completePhase4(list: VocabularyItem[]) {
    this.vocabulary = [...list];
    this.phase += 1;
  }

  completePhase5(list: VocabularyItem[]) {
    this.vocabulary = [...list];
    this.phase += 1;
    this.updateStats();
  }

  trainingsRequired(e: VocabularyItem): number {
    return (e.errors ? e.errors : 0) + this.config.trainingSessionsNecessary;
  }

  updateStats() {
    this.vocabulary = this.vocabulary.map((e: VocabularyItem) => {
      e.last = new Date();
      e.progress = e.progress ? e.progress + 1 : 1;
      e.completed = e.progress >= this.trainingsRequired(e);
      return e;
    });
  }

  closeTraining() {
    this.workbookService.updatePortion(this.vocabulary);
    this.active = false;
    this.complete.emit();
  }
}
