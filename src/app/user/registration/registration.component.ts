import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: [],
})
export class RegistrationComponent implements OnInit {
  constructor(
    public service: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    if (localStorage.getItem('token') != null)
      this.router.navigateByUrl('/homeuser');
    this.service.formModel.reset();
  }

  onSubmit() {
    this.service.register().subscribe(
      (res: any) => {
        if (res.succeeded) {
          // this.service.formModel.
          this.service.formModel.reset();
          this.toastr.success('New user created!', 'Registration successful.');
          // localStorage.setItem('token', res.token);
          //  this.router.navigateByUrl('/homeuser');
        } else {
          res.errors.forEach((element) => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.toastr.error(
                  'Username is already taken',
                  'Registration failed.'
                );
                break;
              case 'DuplicateEmail':
                this.toastr.error(
                  'Email is already taken',
                  'Registration failed.'
                );
                break;
              default:
                this.toastr.error(element.description, 'Registration failed.');
                break;
            }
          });
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
