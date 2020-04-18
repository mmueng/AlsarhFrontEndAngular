import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaindepComponent } from './maindep.component';

describe('MaindepComponent', () => {
  let component: MaindepComponent;
  let fixture: ComponentFixture<MaindepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaindepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaindepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
