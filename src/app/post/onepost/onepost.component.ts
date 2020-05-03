import { Component, OnInit } from '@angular/core';
import { PostService } from './../../shared/post/post.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MaindepService } from './../../shared/maindep.service';
import { NgForm, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-onepost',
  templateUrl: './onepost.component.html',
  styleUrls: ['./onepost.component.css'],
})
export class OnepostComponent implements OnInit {
  id: any;
  check: string;
  onePost: any;
  postID: any;
  constructor(
    private _postService: PostService,
    private _route: ActivatedRoute,
    private router: Router,
    private _maindepService: MaindepService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
      console.log('/////////////-------//////' + params['id']);
    });

    console.log('*********this************', this.id);
    console.log('*********this************', this.id);
    this.getOnePostFromService(this.id);
  }
  public createImgPath = (serverPath: string) => {
    return `http://localhost:51443/${serverPath}`;
  };

  getOnePostFromService(id) {
    let observable = this._postService.getOnePost(id);
    console.log('*********************', id);
    console.log('*********************', id);
    observable.subscribe((data) => {
      console.log('Data: ' + data);
      this.onePost = data;
      this.check = id;
      console.log(this.onePost);
    });
  }
}
