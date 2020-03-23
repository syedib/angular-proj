import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { tutorialReducer } from './store/reducers/tutorial.reducer';
import { TutorialComponent } from './compnents/tutorial/tutorial.component';
import { TutorialEffects } from './store/effects/tutorial.effects';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({tutorial:tutorialReducer}),
    EffectsModule.forRoot([TutorialEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
