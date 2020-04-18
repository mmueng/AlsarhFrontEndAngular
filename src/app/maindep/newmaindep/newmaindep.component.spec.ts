import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmaindepComponent } from './newmaindep.component';

describe('NewmaindepComponent', () => {
  let component: NewmaindepComponent;
  let fixture: ComponentFixture<NewmaindepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewmaindepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmaindepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
