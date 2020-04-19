import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnedepartmentComponent } from './onedepartment.component';

describe('OnedepartmentComponent', () => {
  let component: OnedepartmentComponent;
  let fixture: ComponentFixture<OnedepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnedepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnedepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
