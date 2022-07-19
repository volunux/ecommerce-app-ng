import { Injectable } from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';

@Injectable()
export class EntityOneValidatorsService {

  constructor() { }

  public getTitle(): ValidatorFn[] {
    return [Validators.required, Validators.minLength(3), Validators.maxLength(150)];
  }

  public getDescription(): ValidatorFn[] {
    return [Validators.required, Validators.minLength(10), Validators.maxLength(300)];
  }
}
