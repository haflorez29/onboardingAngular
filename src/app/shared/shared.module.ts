import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { ButtonNextComponent } from './components/button-next/button-next.component';

@NgModule({
  declarations: [CardComponent, ButtonNextComponent],
  imports: [CommonModule],
  exports: [CardComponent, ButtonNextComponent],
})
export class SharedModule {}
