import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OnboardingModule } from './onboarding/onboarding.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, OnboardingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
