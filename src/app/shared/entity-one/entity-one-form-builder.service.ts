import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EntityFormBuilderService } from '../service/shared-service/entity-form-builder.service';
import { EntityOneValidatorsService } from './validator/message/entity-one-validators.service';

@Injectable()
export class EntityOneFormBuilderService extends EntityFormBuilderService {

  constructor(private formBuilder: FormBuilder, protected entityOneValidatorsService: EntityOneValidatorsService) {
    super();
  }

  protected getDefaultForm(): FormGroup {
    return this.formBuilder.group({
      'id': [''],
      'title': ['', this.entityOneValidatorsService.getTitle()],
      'description': ['', this.entityOneValidatorsService.getDescription()]
    });
  }

}
