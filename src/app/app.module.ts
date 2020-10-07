import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OnboardingModule } from './onboarding/onboarding.module';
import { CareerModule } from './career/career.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, OnboardingModule, CareerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
