import { TestBed } from '@angular/core/testing';

import { AllcasesService } from './allcases.service';

describe('AllcasesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllcasesService = TestBed.get(AllcasesService);
    expect(service).toBeTruthy();
  });
});
