import { TestBed } from '@angular/core/testing';

import { ValiddataService } from './validdata.service';

describe('ValiddataService', () => {
  let service: ValiddataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValiddataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
