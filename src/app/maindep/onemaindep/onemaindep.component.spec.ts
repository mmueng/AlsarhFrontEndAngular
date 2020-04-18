import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnemaindepComponent } from './onemaindep.component';

describe('OnemaindepComponent', () => {
  let component: OnemaindepComponent;
  let fixture: ComponentFixture<OnemaindepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnemaindepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnemaindepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
