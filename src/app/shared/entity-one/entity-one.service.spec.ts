import { TestBed } from '@angular/core/testing';

import { EntityOneService } from './entity-one.service';

describe('EntityOneService', () => {
  let service: EntityOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntityOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
