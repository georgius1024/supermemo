import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SortablejsModule } from 'angular-sortablejs';

import { HomeComponent } from './home.component';
import { TrainingHistoryComponent } from '../TrainingHistory/training-history.component';
import { WordSelectorComponent } from '../WordSelector/WordSelector.component';
import { TrainingComponent } from '../Training/training.component';
import { AlertComponent } from '../Alert/alert.component';
import { TranslationComponent } from '../Interactions/translation.component';
import { ReverseTranslationComponent } from '../Interactions/reverse-translation.component';
import { MatchComponent } from '../Interactions/match.component';
import { LetterSorterComponent } from '../Interactions/letter-sorter.component';
import { TranslationIteratorComponent } from '../Interactions/translation-iterator.component';
import { ReverseTranslationIteratorComponent } from '../Interactions/reverse-translation-iterator.component';
import { LetterSorterIteratorComponent } from '../Interactions/letter-sorter-iterator.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ClarityModule, HttpClientModule, SortablejsModule],
      declarations: [
        HomeComponent,
        TrainingHistoryComponent,
        WordSelectorComponent,
        TrainingComponent,
        AlertComponent,
        TranslationComponent,
        ReverseTranslationComponent,
        MatchComponent,
        LetterSorterComponent,
        TranslationIteratorComponent,
        ReverseTranslationIteratorComponent,
        LetterSorterIteratorComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
