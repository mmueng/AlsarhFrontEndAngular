import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { AuthGuard } from './auth/auth.guard';
// Main Department
import { MaindepComponent } from './maindep/maindep.component';
import { AllmaindepComponent } from './maindep/allmaindep/allmaindep.component';
import { NewmaindepComponent } from './maindep/newmaindep/newmaindep.component';
import { EditmaindepComponent } from './maindep/editmaindep/editmaindep.component';
import { OnemaindepComponent } from './maindep/onemaindep/onemaindep.component';
// Department
import { DepartmentComponent } from './department/department.component';
import { NewdepartmentComponent } from './department/newdepartment/newdepartment.component';
import { EditdepartmentComponent } from './department/editdepartment/editdepartment.component';
import { OnedepartmentComponent } from './department/onedepartment/onedepartment.component';
import { AlldepartmentsComponent } from './department/alldepartments/alldepartments.component';
// Ctegory
import { CategoryComponent } from './category/category.component';
import { EditcategoryComponent } from './category/editcategory/editcategory.component';
import { NewcategoryComponent } from './category/newcategory/newcategory.component';
import { OnecategoryComponent } from './category/onecategory/onecategory.component';
// Post
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
    path: 'department',
    component: DepartmentComponent,
    children: [
      { path: 'alldep', component: AlldepartmentsComponent },
      { path: ':id/new', component: NewdepartmentComponent },
      { path: 'edit/:id', component: EditdepartmentComponent },
      { path: ':id', component: OnedepartmentComponent },
    ],
  },
  {
    path: 'category',
    component: CategoryComponent,
    children: [
      { path: ':idmain/:iddep/new', component: NewcategoryComponent },
      { path: 'edit/:id', component: EditcategoryComponent },
      { path: ':id', component: OnecategoryComponent },
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
