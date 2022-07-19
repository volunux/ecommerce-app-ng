import { TestBed } from '@angular/core/testing';

import { HttpValidationInterceptor } from './http-validation.interceptor';

describe('HttpValidationInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpValidationInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpValidationInterceptor = TestBed.inject(HttpValidationInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
