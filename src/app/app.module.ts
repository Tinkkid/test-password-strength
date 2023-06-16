import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PasswordFormComponent } from './components/password-form/password-form.component';
import { StrenghtBarComponent } from './components/strenght-bar/strenght-bar.component';

@NgModule({
  declarations: [AppComponent, PasswordFormComponent, StrenghtBarComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
