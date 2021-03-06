import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { SortablejsModule } from 'angular-sortablejs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WordSelectorComponent } from './WordSelector/WordSelector.component';
import { AlertComponent } from './Alert/alert.component';
import { TranslationComponent } from './Interactions/translation.component';
import { HomeComponent } from './Home/home.component';
import { MatchComponent } from './Interactions/match.component';
import { ConfigComponent } from './Config/config.component';
import { TrainingComponent } from './Training/training.component';
import { TranslationIteratorComponent } from './Interactions/translation-iterator.component';
import { ReverseTranslationComponent } from './Interactions/reverse-translation.component';
import { ReverseTranslationIteratorComponent } from './Interactions/reverse-translation-iterator.component';
import { LetterSorterComponent } from './Interactions/letter-sorter.component';
import { LetterSorterIteratorComponent } from './Interactions/letter-sorter-iterator.component';
import { TrainingHistoryComponent } from './TrainingHistory/training-history.component';
import { SpeakerComponent } from './Speaker/speaker.component';
import { SpeakerButtonComponent } from './Speaker/speaker-button.component';

@NgModule({
  declarations: [
    AppComponent,
    WordSelectorComponent,
    AlertComponent,
    TranslationComponent,
    HomeComponent,
    MatchComponent,
    ConfigComponent,
    TrainingComponent,
    TranslationIteratorComponent,
    ReverseTranslationComponent,
    ReverseTranslationIteratorComponent,
    LetterSorterComponent,
    LetterSorterIteratorComponent,
    TrainingHistoryComponent,
    SpeakerComponent,
    SpeakerButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ClarityModule,
    HttpClientModule,
    SortablejsModule.forRoot({ animation: 150 }),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
