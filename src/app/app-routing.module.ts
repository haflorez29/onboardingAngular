import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeContainerComponent } from './welcome/components/welcome-container/welcome-container.component';
import { WelcomeFormComponent } from './welcome/components/welcome-form/welcome-form.component';

const routes: Routes = [{ path: '', component: WelcomeContainerComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
