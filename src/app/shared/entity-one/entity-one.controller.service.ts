import { AbstractControl } from '@angular/forms';
import { EntityCrudFormControllerService } from '../service/shared-service/entity-crud-form-controller.service';
import { EntityOneFormBuilderService } from './entity-one-form-builder.service';

export abstract class EntityOneController<T> extends EntityCrudFormControllerService<T> {

  protected efbs: EntityOneFormBuilderService;

  constructor() {
    super();
  }

  get title(): AbstractControl | null {
    return this.getEntityForm().get('title');
  }

  get description(): AbstractControl | null {
    return this.getEntityForm().get('description');
  }

  get id(): AbstractControl | null {
    return this.getEntityForm().get('id');
  }

  public deleteAllEntries(): void {
    this.service.deleteAll()
      .subscribe((deleted: boolean) => {
        window.location.href = `${this.entityBasePath.substring(this.entityBasePath.indexOf('/') + 1)}/`;
      });
  }

  public initDeleteAll(): void {
    this.service.removeAll()
      .subscribe((toDelete: boolean) => {
        this.entriesAvailable = toDelete;
      });
  }

}
