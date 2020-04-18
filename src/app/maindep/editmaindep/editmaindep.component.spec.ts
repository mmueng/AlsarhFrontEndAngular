import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmaindepComponent } from './editmaindep.component';

describe('EditmaindepComponent', () => {
  let component: EditmaindepComponent;
  let fixture: ComponentFixture<EditmaindepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmaindepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmaindepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
