import { TestBed } from '@angular/core/testing';

import { Department2Service } from './department2.service';

describe('Department2Service', () => {
  let service: Department2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Department2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
