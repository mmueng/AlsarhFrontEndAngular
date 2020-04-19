import { Component, OnInit } from '@angular/core';
import { DepartmentService } from './../../shared/department/department.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-onedepartment',
  templateUrl: './onedepartment.component.html',
  styleUrls: ['./onedepartment.component.css'],
})
export class OnedepartmentComponent implements OnInit {
  id: any;
  check: string;
  oneDep: any;
  DepID: any;
  constructor(
    private _departmentService: DepartmentService,
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
    let observable = this._departmentService.getOneDep(id);
    console.log('*********************', id);
    console.log('*********************', id);
    observable.subscribe((data) => {
      console.log('Data: ' + data);
      this.oneDep = data;
      this.check = id;
      console.log(this.oneDep);
    });
  }
}
