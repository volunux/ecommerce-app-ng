import { TestBed } from '@angular/core/testing';

import { EntityOneFormBuilderService } from './entity-one-form-builder.service';

describe('EntityOneFormBuilderService', () => {
  let service: EntityOneFormBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntityOneFormBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
