import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PathComponent } from './career/components/path/path.component';
import { FciComponent } from './onboarding/components/fci/fci.component';
import { ImagineComponent } from './onboarding/components/imagine/imagine.component';
import { KeyPeopleComponent } from './onboarding/components/key-people/key-people.component';
import { ReadyComponent } from './onboarding/components/ready/ready.component';
import { TriforceComponent } from './onboarding/components/triforce/triforce.component';
import { WelcomeComponent } from './onboarding/components/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'imagine', component: ImagineComponent },
  { path: 'path', component: PathComponent },
  { path: 'triforce', component: TriforceComponent },
  { path: 'fci3', component: FciComponent },
  { path: 'key-people', component: KeyPeopleComponent },
  { path: 'ready', component: ReadyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
