import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { HttpService } from './http.service';
// Main Department
import { MaindepService } from './shared/maindep.service';
import { MaindepComponent } from './maindep/maindep.component';
import { AllmaindepComponent } from './maindep/allmaindep/allmaindep.component';
import { NewmaindepComponent } from './maindep/newmaindep/newmaindep.component';
import { EditmaindepComponent } from './maindep/editmaindep/editmaindep.component';
import { OnemaindepComponent } from './maindep/onemaindep/onemaindep.component';
// Department

import { DepartmentService } from './shared/department/department.service';
import { DepartmentComponent } from './department/department.component';
import { NewdepartmentComponent } from './department/newdepartment/newdepartment.component';
import { EditdepartmentComponent } from './department/editdepartment/editdepartment.component';
import { OnedepartmentComponent } from './department/onedepartment/onedepartment.component';
import { AlldepartmentsComponent } from './department/alldepartments/alldepartments.component';
// Categories
import { CategoryService } from './shared/category/category.service';
import { CategoryComponent } from './category/category.component';
import { EditcategoryComponent } from './category/editcategory/editcategory.component';
import { NewcategoryComponent } from './category/newcategory/newcategory.component';
import { OnecategoryComponent } from './category/onecategory/onecategory.component';
// Post

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeUserComponent,
    MaindepComponent,
    AllmaindepComponent,
    NewmaindepComponent,
    EditmaindepComponent,
    OnemaindepComponent,
    DepartmentComponent,
    NewdepartmentComponent,
    EditdepartmentComponent,
    OnedepartmentComponent,
    AlldepartmentsComponent,
    CategoryComponent,
    EditcategoryComponent,
    NewcategoryComponent,
    OnecategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true,
    }),
    FormsModule,
  ],
  providers: [
    HttpService,
    MaindepService,
    DepartmentService,
    CategoryService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
