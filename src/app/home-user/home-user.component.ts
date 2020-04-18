import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home-user.component.html',
  styles: [],
})
export class HomeUserComponent implements OnInit {
  userDetails;
  status: string;
  constructor(private router: Router, private service: UserService) {}

  ngOnInit() {
    this.service.getUserProfile().subscribe(
      (res) => {
        this.userDetails = res;
      },
      (err) => {
        console.log(err);
      }
    );
    this.checkUser();
  }
  checkUser() {
    if (localStorage.getItem('token') != null) {
      this.status = 'Logged in';
    }
    return this.status;
  }
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }
}
