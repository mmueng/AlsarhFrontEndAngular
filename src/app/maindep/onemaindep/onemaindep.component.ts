import { Component, OnInit } from '@angular/core';
import { MaindepService } from './../../shared/maindep.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-onemaindep',
  templateUrl: './onemaindep.component.html',
  styleUrls: ['./onemaindep.component.css'],
})
export class OnemaindepComponent implements OnInit {
  id: any;
  check: string;
  oneMainDep: any;
  mainDepID: any;
  constructor(
    private _maindepService: MaindepService,
    private _route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
      console.log('/////////////-------//////' + params['id']);
    });

    console.log('*********this************', this.id);
    console.log('*********this************', this.id);
    this.getOneMainDepFromService(this.id);
  }

  getOneMainDepFromService(id) {
    let observable = this._maindepService.getOneMainDep(id);
    console.log('*********************', id);
    console.log('*********************', id);
    observable.subscribe((data) => {
      console.log('Data: ' + data['mainDepID']);
      this.oneMainDep = data;
      this.check = id;
      console.log(this.oneMainDep);
    });
  }
}
