import { Injectable } from '@angular/core';
import { VocabularyItem, random, itemNotInList } from './course.service';
const storageKey = 'supermemo-workbook';

function fuzzyLessTrained(a: VocabularyItem, b: VocabularyItem) {
  if ((random() + 0.5) > 0.3) {
    // 70% - верный порядок
    return (a.progress || 0) - (b.progress || 0) || random();
  } else {
    // 30% - случайный
    return random();
  }
}
function notCompleted(e: VocabularyItem): boolean {
  return !e.completed;
}

@Injectable({
  providedIn: 'root'
})
export class WorkbookService {
  vocabulary: VocabularyItem[] = [];

  constructor() {
    this.loadVocabulary();
  }

  private loadVocabulary() {
    if (localStorage.getItem(storageKey)) {
      try {
        this.vocabulary = JSON.parse(localStorage.getItem(storageKey));
      } catch {
        this.vocabulary = [];
      }
    }
  }

  private saveVocabulary() {
    localStorage.setItem(storageKey, JSON.stringify(this.vocabulary));
  }

  public addPortion(portion: VocabularyItem[]) {
    const itemNotInVocabulary = itemNotInList(this.vocabulary);
    this.vocabulary = this.vocabulary.concat(
      portion.filter(itemNotInVocabulary)
    );
    this.saveVocabulary();
  }

  public getPortion(quantity: number, filter: any): VocabularyItem[] {
    return this.vocabulary
      .filter(filter)
      .sort(random)
      .slice(0, quantity);
  }

  public getLessTrained(quantity: number): VocabularyItem[] {
    return this.vocabulary
      .filter(notCompleted)
      .sort(fuzzyLessTrained)
      .slice(0, quantity)
      .sort(random);
  }

  public getAll(): VocabularyItem[] {
    return [...this.vocabulary];
  }

  public updatePortion(portion: VocabularyItem[]) {
    this.vocabulary.forEach(v => {
      portion.forEach(p => {
        if (v.word === p.word) {
          v = { ...p };
        }
      });
    });
    this.saveVocabulary();
  }
}
