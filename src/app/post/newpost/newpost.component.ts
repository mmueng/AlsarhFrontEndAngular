import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostService } from './../../shared/post/post.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm, FormsModule } from '@angular/forms';
import { HttpEventType, HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css'],
})
export class NewpostComponent implements OnInit {
  errors: any;
  newPost: any;
  newphoto: any;
  idMainDep: any;
  idDep: any;
  idCateg: any;
  imgPath: any;
  path: any;
  public newPostID: any;
  public response: any;
  photoList: Array<string>;
  @Output() public onPostedFinished = new EventEmitter();
  constructor(
    private _postService: PostService,
    private _route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private http: HttpClient
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
      photoList: [],
      imgPath: '',
    };
    this.errors = {
      title: '',
      titleAR: '',
      description: '',
      descriptionAR: '',
      creator: '',
      imgPath: '',
      photoList: [],
    };
    this.newphoto = {
      imgPath: '',
      curPostID: '',
      CurrPost: '',
    };
  }
  public uploadFinished = (event) => {
    this.response = event;
    console.log('Responce => ', this.response);
    this.path = this.response.dbPath;
    console.log('Responce path => ', this.response.dbPath);
    if (typeof this.photoList == 'undefined') {
      this.photoList = Array<string>();
    }
    console.log('List length', this.photoList.length);
    this.photoList.push(this.path);
    for (let a of this.photoList) {
      console.log('Loop: => ', a);
    }
  };

  public postedFinished = (event) => {
    this.response = event;
    console.log('Responce Post ID ==> ', this.response);
    this.newPostID = this.response;
  };

  public createImgPath = (serverPath: string) => {
    return `http://localhost:51443/${serverPath}`;
  };
  addPostFromService() {
    this.newPost.pMainDepID = this.idMainDep;
    this.newPost.CurrDepID = this.idDep;
    this.newPost.CurrCategoryID = this.idCateg;
    this.newPost.imgPath = this.response.dbPath;
    this.photoList = this.photoList;
    for (let a of this.photoList) {
      console.log('Loop Post: => ', a);
    }
    let observable = this._postService.addPost(this.newPost, this.photoList);
    observable.subscribe((data) => {
      console.log('POstttt=> ' + this.newPost);

      console.log('=====> ' + data, JSON.stringify(this.newPost));
      if (data['errors'] != 'ERROR') {
        this.newPost = {
          title: '',
          titleAR: '',
          description: '',
          descriptionAR: '',
          creator: '',
          photoList: [],
          imgPath: '',
        };
        this.errors = {
          title: '',
          titleAR: '',
          description: '',
          descriptionAR: '',
          creator: '',
          photoList: [],
          imgPath: '',
        };
        // this observable for getting the id after post compleated
        observable.subscribe((event) => {
          console.log('POstttt=> ' + this.newPost);
          this.onPostedFinished.emit(event);
          console.log('Getting the new id from server==> ', event);
          console.log('Getting the new id from server==> ', event['postID']);
          //  Adding id of the post to photo

          // Create photo class of photo List
          for (let a of this.photoList) {
            console.log('Loop Post: => ', a);

            this.newphoto = {
              imgPath: a,
              curPostID: event['postID'],
            };

            const formData = new FormData();

            formData.append('imgPath', a);
            formData.append('curPostID', event['postID']);
            //  formData.append('curPostID',event);
            this.http
              // .post('http://localhost:51443/api/upload', formData, {
              .post('http://localhost:51443/api/Photos', this.newphoto, {
                reportProgress: true,
                observe: 'events',
              })
              .subscribe((data) => {
                console.log('Photo Class==> ', data);
              });
          }
        });
        // End of second obsevavle
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
