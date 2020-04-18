import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmaindepComponent } from './allmaindep.component';

describe('AllmaindepComponent', () => {
  let component: AllmaindepComponent;
  let fixture: ComponentFixture<AllmaindepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllmaindepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllmaindepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
