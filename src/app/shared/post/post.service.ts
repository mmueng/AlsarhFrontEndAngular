import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private fb: FormBuilder, private http: HttpClient) {}
  readonly BaseURI = 'http://localhost:51443/api';

  getAllposts() {
    return this.http.get(this.BaseURI + '/Posts');
  }
  getOnePost(id) {
    return this.http.get(this.BaseURI + `/Posts/${id}`);
  }

  deleteOnePosts(id) {
    return this.http.delete(this.BaseURI + `/Posts/${id}`);
  }
  addPost(newPost, photoList) {
    return this.http.post(this.BaseURI + '/Posts', newPost, photoList);
  }
  editPost(editPost) {
    return this.http.put(this.BaseURI + `/Posts/${editPost.postID}`, editPost);
  }
}
