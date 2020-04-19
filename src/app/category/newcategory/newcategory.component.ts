import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../shared/category/category.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-newcategory',
  templateUrl: './newcategory.component.html',
  styleUrls: ['./newcategory.component.css'],
})
export class NewcategoryComponent implements OnInit {
  errors: any;
  newCateg: any;
  idMainDep: any;
  idDep: any;
  constructor(
    private _CategoryService: CategoryService,
    private _route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    // this.addAuthsFromService();
    this._route.params.subscribe((params: Params) => {
      this.idMainDep = params['idmain'];
      this.idDep = params['iddep'];
      console.log(
        this.idMainDep +
          ' -' +
          this.idDep +
          '/////////////-------//////' +
          params['idmain'] +
          '---' +
          params['iddep']
      );
    });
    this.newCateg = {
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

  addCategoryFromService() {
    this.newCateg.MainDepID = this.idMainDep;
    this.newCateg.DepID = this.idDep;
    let observable = this._CategoryService.addCategory(this.newCateg);
    observable.subscribe((data) => {
      console.log(this.newCateg);
      console.log('=====> ' + data);
      if (data['errors'] != 'ERROR') {
        this.newCateg = {
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
