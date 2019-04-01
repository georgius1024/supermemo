import { Component, OnInit, OnChanges } from '@angular/core';
import { WorkbookService } from '../Services/workbook.service';
import { VocabularyItem } from '../Services/course.service';

@Component({
  selector: 'app-training-history',
  templateUrl: './training-history.component.html',
  styleUrls: ['./training-history.component.scss']
})
export class TrainingHistoryComponent implements OnInit, OnChanges {
  public pageSize = 10;
  public vocabulary: VocabularyItem[] = [];
  public page: VocabularyItem[] = [];
  public pageNo = 0;
  public pages: number[];

  constructor(private workbookService: WorkbookService) { }

  ngOnInit() {
    this.buildList();
    this.paginate(0);
  }

  ngOnChanges() {
    this.buildList();
    this.paginate(0);
  }

  buildList() {
    this.vocabulary = this.workbookService.getAll()
      .filter((e: VocabularyItem) => e.completed)
      .reverse();
  }

  paginate(pageNo: number) {
    this.pageNo = pageNo;
    this.page = this.vocabulary.slice(this.pageNo * this.pageSize, (this.pageNo + 1) * this.pageSize);
    this.pages = [];
    for (let p = 0; p < Math.ceil(this.vocabulary.length / this.pageSize); p++) {
      this.pages.push(p);
    }
  }
}
