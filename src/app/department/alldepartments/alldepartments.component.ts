import { Component, OnInit } from '@angular/core';
import { DepartmentService } from './../../shared/department/department.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-alldepartments',
  templateUrl: './alldepartments.component.html',
  styleUrls: ['./alldepartments.component.css'],
})
export class AlldepartmentsComponent implements OnInit {
  allDep: any;
  oneDep: any;
  constructor(
    private _departmentService: DepartmentService,
    private _route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getAllMainDepFromService();
  }

  getAllMainDepFromService() {
    let observable = this._departmentService.getAllDep();
    observable.subscribe((data) => {
      console.log(data);
      this.allDep = data;
      console.log(this.allDep);
      this.router.navigate(['/main/all']);
    });
  }
}
