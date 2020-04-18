import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private fb: FormBuilder, private http: HttpClient) {}
  readonly BaseURI = 'http://localhost:51443/api';

  formModel = this.fb.group({
    UserName: ['', Validators.required],
    FirstName: ['', Validators.required],
    LastName: ['', Validators.required],
    VLevelUser: ['', Validators.required],
    Email: ['', Validators.email],
    Passwords: this.fb.group(
      {
        Password: ['', [Validators.required, Validators.minLength(8)]],
        ConfirmPassword: ['', Validators.required],
      },
      { validator: this.comparePasswords }
    ),
  });
  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    // passwordMismatch
    // confirmPswrdCtrl.errors={passwordMismatch:true}
    if (
      confirmPswrdCtrl.errors == null ||
      'passwordMismatch' in confirmPswrdCtrl.errors
    ) {
      if (fb.get('Password').value != confirmPswrdCtrl.value) {
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      } else {
        confirmPswrdCtrl.setErrors(null);
      }
    }
  }

  register() {
    var body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      Password: this.formModel.value.Passwords.Password,
      FirstName: this.formModel.value.FirstName,
      LastName: this.formModel.value.LastName,
      VLevelUser: this.formModel.value.VLevelUser,
    };
    return this.http.post(this.BaseURI + '/ApplicationUser/Register', body);
  }

  login(formData) {
    return this.http.post(this.BaseURI + '/ApplicationUser/Login', formData);
  }

  getUserProfile() {
    return this.http.get(this.BaseURI + '/UserProfile');
  }
}
