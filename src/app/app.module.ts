import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroFormReactiveComponent } from './hero-form-reactive/hero-form-reactive.component';
import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';
import { IdentityRevealedValidatorDirective } from './shared/identity-revealed.directive';
import { UniqueAlterEgoValidatorDirective } from './shared/alter-ego.directive';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    HeroFormReactiveComponent,
    ForbiddenValidatorDirective,
    IdentityRevealedValidatorDirective,
    UniqueAlterEgoValidatorDirective,
    DynamicFormComponent,
    DynamicFormQuestionComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
