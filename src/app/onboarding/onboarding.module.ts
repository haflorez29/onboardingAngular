import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeFormComponent } from './components/welcome-form/welcome-form.component';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ImagineComponent } from './components/imagine/imagine.component';

@NgModule({
  declarations: [WelcomeComponent, WelcomeFormComponent, ImagineComponent],
  imports: [CommonModule, FormsModule],
  exports: [WelcomeComponent, WelcomeFormComponent, ImagineComponent],
})
export class OnboardingModule {}
