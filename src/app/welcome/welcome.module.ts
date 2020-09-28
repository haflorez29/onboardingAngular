import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeContainerComponent } from './components/welcome-container/welcome-container.component';
import { WelcomeFormComponent } from './components/welcome-form/welcome-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [WelcomeContainerComponent, WelcomeFormComponent],
  imports: [CommonModule, FormsModule],
})
export class WelcomeModule {}
