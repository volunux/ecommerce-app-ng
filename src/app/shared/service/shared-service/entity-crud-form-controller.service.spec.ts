import { TestBed } from '@angular/core/testing';

import { EntityCrudFormControllerService } from './entity-crud-form-controller.service';

describe('EntityCrudFormControllerService', () => {
  let service: EntityCrudFormControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntityCrudFormControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
