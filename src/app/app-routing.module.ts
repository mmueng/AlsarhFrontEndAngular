import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { AuthGuard } from './auth/auth.guard';
import { MaindepComponent } from './maindep/maindep.component';
import { AllmaindepComponent } from './maindep/allmaindep/allmaindep.component';
import { NewmaindepComponent } from './maindep/newmaindep/newmaindep.component';
import { EditmaindepComponent } from './maindep/editmaindep/editmaindep.component';
import { OnemaindepComponent } from './maindep/onemaindep/onemaindep.component';

const routes: Routes = [
  // Defualt route => later need to change it to /
  // { path: '', redirectTo: '/user/login', pathMatch: 'full' },
  { path: '', redirectTo: '/main/all', pathMatch: 'full' },
  {
    path: 'main',
    component: MaindepComponent,
    children: [
      { path: 'all', component: AllmaindepComponent },
      { path: 'new', component: NewmaindepComponent },
      { path: 'edit/:id', component: EditmaindepComponent },
      { path: ':id', component: OnemaindepComponent },
    ],
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent },
    ],
  },
  { path: 'homeuser', component: HomeUserComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
