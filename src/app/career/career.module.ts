import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathComponent } from './components/path/path.component';
import { RangeComponent } from './components/range/range.component';
import { MgmtComponent } from './components/mgmt/mgmt.component';
import { CardPathComponent } from './components/card-path/card-path.component';

@NgModule({
  declarations: [PathComponent, RangeComponent, MgmtComponent, CardPathComponent],
  imports: [CommonModule],
  exports: [PathComponent],
})
export class CareerModule {}
