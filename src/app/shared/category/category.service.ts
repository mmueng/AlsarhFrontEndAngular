import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private fb: FormBuilder, private http: HttpClient) {}
  readonly BaseURI = 'http://localhost:51443/api';

  getAllCategories() {
    return this.http.get(this.BaseURI + '/Categories');
  }
  getOneCategory(id) {
    return this.http.get(this.BaseURI + `/Categories/${id}`);
  }

  deleteOneCategory(id) {
    return this.http.delete(this.BaseURI + `/Categories/${id}`);
  }
  addCategory(newCateg) {
    return this.http.post(this.BaseURI + '/Categories', newCateg);
  }
  editCategory(editCateg) {
    return this.http.put(
      this.BaseURI + `/Categories/${editCateg.categoryID}`,
      editCateg
    );
  }
}
