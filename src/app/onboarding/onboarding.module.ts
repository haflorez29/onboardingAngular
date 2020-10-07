import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeFormComponent } from './components/welcome-form/welcome-form.component';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ImagineComponent } from './components/imagine/imagine.component';
import { TriforceComponent } from './components/triforce/triforce.component';
import { TriforceTableComponent } from './components/triforce-table/triforce-table.component';
import { NextButtonComponent } from './components/next-button/next-button.component';

@NgModule({
  declarations: [
    WelcomeComponent,
    WelcomeFormComponent,
    ImagineComponent,
    TriforceComponent,
    TriforceTableComponent,
    NextButtonComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    WelcomeComponent,
    WelcomeFormComponent,
    ImagineComponent,
    NextButtonComponent,
  ],
})
export class OnboardingModule {}
