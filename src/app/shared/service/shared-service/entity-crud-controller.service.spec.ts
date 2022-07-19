import { TestBed } from '@angular/core/testing';

import { EntityCrudControllerService } from './entity-crud-controller.service';

describe('EntityCrudControllerService', () => {
  let service: EntityCrudControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntityCrudControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
