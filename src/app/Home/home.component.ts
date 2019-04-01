import { Component, OnInit, OnChanges } from '@angular/core';
import { CourseService, VocabularyItem } from '../Services/course.service';
import { WorkbookService } from '../Services/workbook.service';
import { ConfigService, Config } from '../Config/config.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {
  public vocabulary: VocabularyItem[] = [];
  public canAddWords = false;
  public readyWords: VocabularyItem[] = [];
  public completedWords: VocabularyItem[] = [];
  public addWords = false;
  public isReady = false;
  public config: Config;
  constructor(
    private courseService: CourseService,
    private workbookService: WorkbookService,
    private configService: ConfigService
  ) { }

  ngOnInit() {
    this.config = this.configService.get();
    this.courseService.isLoaded$.subscribe(() => {
      this.isReady = true;
      this.refreshVocabulary();
      this.addWords = this.readyWords.length === 0;
    });
  }

  ngOnChanges() {
    this.config = this.configService.get();
    this.refreshVocabulary();
    this.addWords = this.readyWords.length === 0;
  }

  trainingsRequired(e: VocabularyItem): number {
    return (e.errors ? e.errors : 0) + this.config.trainingSessionsNecessary;
  }

  refreshVocabulary() {
    this.vocabulary = this.workbookService.getAll();
    this.readyWords =
      this.vocabulary.filter((e: VocabularyItem) => !e.completed);
    this.completedWords =
      this.vocabulary.filter((e: VocabularyItem) => e.completed);
    this.canAddWords =
      this.config.wordsInTrainingQuantity > this.readyWords.length;
  }


  addPortion(portion: VocabularyItem[]) {
    this.workbookService.addPortion(portion);
    this.addWords = false;
    this.refreshVocabulary();
  }

  traingCompleted() {
    this.refreshVocabulary();
    this.addWords = this.readyWords.length === 0;
  }
}
