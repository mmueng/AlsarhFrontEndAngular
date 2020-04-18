import { Component, OnInit } from '@angular/core';
import { MaindepService } from './../../shared/maindep.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-allmaindep',
  templateUrl: './allmaindep.component.html',
  styleUrls: ['./allmaindep.component.css'],
})
export class AllmaindepComponent implements OnInit {
  allMainDep: any;
  oneMainDep: any;
  constructor(
    private _maindepService: MaindepService,
    private _route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getAllMainDepFromService();
  }

  getAllMainDepFromService() {
    let observable = this._maindepService.getAllMainDep();
    observable.subscribe((data) => {
      console.log(data);
      this.allMainDep = data;
      console.log(this.allMainDep);
      this.router.navigate(['/main/all']);
    });
  }

  delelteOneMainDepfromService(id) {
    console.log(id);
    let observable = this._maindepService.deleteMainDep(id);
    observable.subscribe((data) => {
      console.log('Delete');
      this.oneMainDep = data['result'];
      // this._router.navigate(['/rest']);
      this.getAllMainDepFromService();
    });
  }
}
