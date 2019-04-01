import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';

export interface VocabularyItem {
  word: string;
  transcription: string;
  translation: string;
  progress?: number;
  errors?: number;
  errorsBefore?: number;
  last?: any;
  completed?: boolean;
}

export function itemNotInList(list: VocabularyItem[]) {
  return (item: VocabularyItem) => {
    return !list.find((poolItem: VocabularyItem) => poolItem.word === item.word);
  };
}

export function random() {
  return Math.random() - 0.5;
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  public isLoaded$: ReplaySubject<boolean>;
  private vocabulary: VocabularyItem[] = [];
  constructor(private http: HttpClient) {
    this.isLoaded$ = new ReplaySubject<boolean>(1);
    this.fetch$().subscribe(list => {
      this.vocabulary = list;
      this.isLoaded$.next(true);
    });
  }

  fetch$() {
    return this.http.get('./assets/vocabulary.json') as Observable<
      VocabularyItem[]
    >;
  }

  public getPortion(
    quantity: number,
    skipList: VocabularyItem[] = []
  ): VocabularyItem[] {
    const notExistsInSkipList = itemNotInList(skipList);
    return this.vocabulary
      .filter(notExistsInSkipList)
      .sort(random)
      .slice(0, quantity);
  }
}
