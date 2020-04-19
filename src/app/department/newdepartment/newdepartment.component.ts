import { Component, OnInit } from '@angular/core';
import { DepartmentService } from './../../shared/department/department.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-newdepartment',
  templateUrl: './newdepartment.component.html',
  styleUrls: ['./newdepartment.component.css'],
})
export class NewdepartmentComponent implements OnInit {
  errors: any;
  newDep: any;
  id: any;
  constructor(
    private _departmentService: DepartmentService,
    private _route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    // this.addAuthsFromService();
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
      console.log('/////////////-------//////' + params['id']);
    });
    this.newDep = {
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

  addDepFromService() {
    this.newDep.CurrMainDepID = this.id;
    let observable = this._departmentService.addDep(this.newDep);
    observable.subscribe((data) => {
      console.log(this.newDep);
      console.log('=====> ' + data);
      if (data['errors'] != 'ERROR') {
        this.newDep = {
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
