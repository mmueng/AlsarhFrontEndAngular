import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(private fb: FormBuilder, private http: HttpClient) {}
  readonly BaseURI = 'http://localhost:51443/api';

  getAllDep() {
    return this.http.get(this.BaseURI + '/Departments');
  }
  getOneDep(id) {
    return this.http.get(this.BaseURI + `/Departments/${id}`);
  }

  deleteDeps(id) {
    return this.http.delete(this.BaseURI + `/Departments/${id}`);
  }
  addDep(newDep) {
    return this.http.post(this.BaseURI + '/Departments', newDep);
  }
  editDep(editDep) {
    return this.http.put(
      this.BaseURI + `/Departments/${editDep.depID}`,
      editDep
    );
  }
}
