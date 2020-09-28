import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeFormComponent } from './onboarding/components/welcome-form/welcome-form.component';
import { WelcomeComponent } from './onboarding/components/welcome/welcome.component';

const routes: Routes = [{ path: '', component: WelcomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
