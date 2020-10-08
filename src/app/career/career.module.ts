import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathComponent } from './components/path/path.component';
import { RangeComponent } from './components/range/range.component';
import { MgmtComponent } from './components/mgmt/mgmt.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PathComponent, RangeComponent, MgmtComponent],
  imports: [CommonModule, SharedModule],
  exports: [PathComponent],
})
export class CareerModule {}
