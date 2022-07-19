import { TestBed } from '@angular/core/testing';

import { EntityFormBuilderService } from './entity-form-builder.service';

describe('EntityFormBuilderService', () => {
  let service: EntityFormBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntityFormBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
