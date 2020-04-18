import { TestBed } from '@angular/core/testing';

import { MaindepService } from './maindep.service';

describe('MaindepService', () => {
  let service: MaindepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaindepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
