import { Component, OnInit } from '@angular/core';
import { MaindepService } from './../../shared/maindep.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newmaindep',
  templateUrl: './newmaindep.component.html',
  styleUrls: ['./newmaindep.component.css'],
})
export class NewmaindepComponent implements OnInit {
  errors: any;
  allAuths: any;
  newMainDep: any;
  constructor(
    private _maindepService: MaindepService,
    private _route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    // this.addAuthsFromService();
    this.newMainDep = {
      name: '',
      nameAR: '',
      description: '',
      descriptionAR: '',
      creator: '',
    };
    this.errors = {
      name: '',
      nameAR: '',
      description: '',
      descriptionAR: '',
      creator: '',
    };
  }

  addMainDepFromService() {
    let observable = this._maindepService.addMainDep(this.newMainDep);
    observable.subscribe((data) => {
      console.log(this.newMainDep);
      console.log('=====> ' + data);
      if (data['errors'] != 'ERROR') {
        this.newMainDep = {
          name: '',
          nameAR: '',
          description: '',
          descriptionAR: '',
          creator: '',
        };
        this.errors = {
          name: '',
          nameAR: '',
          description: '',
          descriptionAR: '',
          creator: '',
        };
        this.router.navigate(['/main/all']);
      } else {
        console.log('=====> ' + data + ' -- ' + data['error']);
        this.errors.name = data['errors'] + ' Name is Require!';
        console.log(this.errors.name);
        this.errors.nameAR = data['errors'] + ' Cusinie is Required';
        console.log(this.errors.nameAR);
      }
    });
  }
}
