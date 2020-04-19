import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../shared/category/category.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-onecategory',
  templateUrl: './onecategory.component.html',
  styleUrls: ['./onecategory.component.css'],
})
export class OnecategoryComponent implements OnInit {
  id: any;
  check: string;
  oneCateg: any;
  categID: any;
  constructor(
    private _categoryService: CategoryService,
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
    this.getOneCategoryFromService(this.id);
  }

  getOneCategoryFromService(id) {
    let observable = this._categoryService.getOneCategory(id);
    console.log('*********************', id);
    console.log('*********************', id);
    observable.subscribe((data) => {
      console.log('Data: ' + data);
      this.oneCateg = data;
      this.check = id;
      console.log(this.oneCateg);
    });
  }
}
