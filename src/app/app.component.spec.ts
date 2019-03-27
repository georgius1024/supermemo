import { TestBed, async } from '@angular/core/testing';
import { ClarityModule } from '@clr/angular';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SortablejsModule } from 'angular-sortablejs';

import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { ConfigComponent } from './Config/config.component';
import { AlertComponent } from './alert.component';
import { TrainingHistoryComponent } from './TrainingHistory/training-history.component';
import { WordSelectorComponent } from './WordSelector/WordSelector.component';
import { TrainingComponent } from './Training/training.component';
import { TranslationComponent } from './Interactions/translation.component';
import { ReverseTranslationComponent } from './Interactions/reverse-translation.component';
import { MatchComponent } from './Interactions/match.component';
import { LetterSorterComponent } from './Interactions/letter-sorter.component';
import { TranslationIteratorComponent } from './Interactions/translation-iterator.component';
import { ReverseTranslationIteratorComponent } from './Interactions/reverse-translation-iterator.component';
import { LetterSorterIteratorComponent } from './Interactions/letter-sorter-iterator.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClarityModule, AppRoutingModule, FormsModule, HttpClientModule, SortablejsModule],
      declarations: [
        AppComponent,
        HomeComponent,
        ConfigComponent,
        AlertComponent,
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

      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'supermemo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('supermemo');
  });

  it('should render title in a header tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('header').textContent.includes('Supermemo')).toBe(true);
  });
});
