import { Component, OnInit } from '@angular/core';
import { PostService } from './../../shared/post/post.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css'],
})
export class NewpostComponent implements OnInit {
  errors: any;
  newPost: any;
  idMainDep: any;
  idDep: any;
  idCateg: any;
  constructor(
    private _postService: PostService,
    private _route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    // this.addAuthsFromService();
    this._route.params.subscribe((params: Params) => {
      this.idMainDep = params['idmain'];
      this.idDep = params['iddep'];
      this.idCateg = params['idcateg'];
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
    this.newPost = {
      title: '',
      titleAR: '',
      description: '',
      descriptionAR: '',
      creator: '',
    };
    this.errors = {
      title: '',
      titleAR: '',
      description: '',
      descriptionAR: '',
      creator: '',
    };
  }

  addPostFromService() {
    this.newPost.pMainDepID = this.idMainDep;
    this.newPost.CurrDepID = this.idDep;
    this.newPost.CurrCategoryID = this.idCateg;
    let observable = this._postService.addPost(this.newPost);
    observable.subscribe((data) => {
      console.log(this.newPost);
      console.log('=====> ' + data);
      if (data['errors'] != 'ERROR') {
        this.newPost = {
          title: '',
          titleAR: '',
          description: '',
          descriptionAR: '',
          creator: '',
        };
        this.errors = {
          title: '',
          titleAR: '',
          description: '',
          descriptionAR: '',
          creator: '',
        };
        this.router.navigate(['/main/all']);
      } else {
        console.log('=====> ' + data + ' -- ' + data['error']);
        this.errors.title = data['errors'] + ' title is Require!';
        console.log(this.errors.title);
        this.errors.titleAR = data['errors'] + ' title is Required';
        console.log(this.errors.titleAR);
      }
    });
  }
}
