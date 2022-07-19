import { TestBed } from '@angular/core/testing';

import { EntityOneValidatorsService } from './entity-one-validators.service';

describe('EntityOneValidatorsService', () => {
  let service: EntityOneValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntityOneValidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
