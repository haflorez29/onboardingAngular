import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeFormComponent } from './components/welcome-form/welcome-form.component';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [WelcomeComponent, WelcomeFormComponent],
  imports: [CommonModule, FormsModule],
  exports: [WelcomeComponent, WelcomeFormComponent],
})
export class OnboardingModule {}
