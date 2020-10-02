import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagineComponent } from './onboarding/components/imagine/imagine.component';
import { WelcomeComponent } from './onboarding/components/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'imagine', component: ImagineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
