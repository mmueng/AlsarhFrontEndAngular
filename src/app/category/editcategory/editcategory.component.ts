import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../shared/category/category.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css'],
})
export class EditcategoryComponent implements OnInit {
  editCateg: any;
  id: any;
  errors: any;
  constructor(
    private _categoryService: CategoryService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.id = params['id'];
    });
    this.showEditForm(this.id);
    this.editCateg = {
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
  showEditForm(id) {
    let observable = this._categoryService.getOneCategory(id);
    console.log('*********************', id);
    console.log('*********************', id);
    observable.subscribe((data) => {
      console.log('Data: ' + data);
      this.editCateg = data;
      // this.check = id;
      console.log(this.editCateg);
    });
    // this.showdetail = !this.showdetail;
    // let observable = this._maindepService.getOneMainDep(id);
    // observable.subscribe((data) => {
    //   console.log('One Task!!', data);
    //   this.editMainDep = data['result'];
    //   console.log('One Maindep to edit ', this.editMainDep);
    // });
  }

  onEdit() {
    // edit_task.showEditForm = false;
    let observable = this._categoryService.editCategory(this.editCateg);
    observable.subscribe((data) => {
      console.log('Edit =>', data);
      // this.edit_task = data;
      // this.editAuth = { name: "" };
      // this._router.navigate(['/']);

      if (data != 'Error') {
        this.editCateg = {
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
        this._router.navigate(['/main/all']);
      } else {
        this.errors.name = data + ' Name is Require';
        console.log(this.errors.name);
        this.errors.nameAR = data + ' Cusinie is Required';
        console.log(this.errors.nameAR);
      }
    });
  }
}
