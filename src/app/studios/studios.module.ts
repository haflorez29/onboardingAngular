import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesStudiosComponent } from './components/classes-studios/classes-studios.component';
import { StudioCarouselComponent } from './components/studio-carousel/studio-carousel.component';
import { StudioItemComponent } from './components/studio-item/studio-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ClassesStudiosComponent,
    StudioCarouselComponent,
    StudioItemComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [ClassesStudiosComponent],
})
export class StudiosModule {}
