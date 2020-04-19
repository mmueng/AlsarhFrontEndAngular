import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MaindepService {
  constructor(private fb: FormBuilder, private http: HttpClient) {}
  readonly BaseURI = 'http://localhost:51443/api';

  getAllMainDep() {
    return this.http.get(this.BaseURI + '/MainDeps');
  }
  getOneMainDep(id) {
    return this.http.get(this.BaseURI + `/MainDeps/${id}`);
  }

  deleteMainDep(id) {
    return this.http.delete(this.BaseURI + `/MainDeps/${id}`);
  }
  addMainDep(newMainDep) {
    return this.http.post(this.BaseURI + '/MainDeps', newMainDep);
  }
  editMainDep(editMainDep) {
    return this.http.put(
      this.BaseURI + `/MainDeps/${editMainDep.mainDepID}`,
      editMainDep
    );
  }
  deleteDep(id) {
    return this.http.delete(this.BaseURI + `/Departments/${id}`);
  }
  deleteOneCategorys(id) {
    return this.http.delete(this.BaseURI + `/Categories/${id}`);
  }
}
