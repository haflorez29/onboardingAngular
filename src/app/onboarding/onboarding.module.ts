import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeFormComponent } from './components/welcome-form/welcome-form.component';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ImagineComponent } from './components/imagine/imagine.component';
import { TriforceComponent } from './components/triforce/triforce.component';
import { TriforceTableComponent } from './components/triforce-table/triforce-table.component';
import { FciComponent } from './components/fci/fci.component';
import { FciCategoryComponent } from './components/fci-category/fci-category.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    WelcomeComponent,
    WelcomeFormComponent,
    ImagineComponent,
    TriforceComponent,
    TriforceTableComponent,
    FciComponent,
    FciCategoryComponent,
  ],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [WelcomeComponent, WelcomeFormComponent, ImagineComponent],
})
export class OnboardingModule {}
