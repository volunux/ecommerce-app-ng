import { FormGroup } from '@angular/forms';
import { EntityCrudController } from './entity-crud-controller.service';
import { EntityFormBuilderService } from './entity-form-builder.service';

export abstract class EntityCrudFormControllerService<T> extends EntityCrudController<T> {

  public entityForm: FormGroup = new FormGroup({});
  protected abstract efbs: EntityFormBuilderService;
  
  constructor() {
    super();
  }

  get isControlDisabled(): boolean {
    return false;
  }

  protected getEntityForm(): FormGroup {
    return this.entityForm;
  }

  public setForm(formGroup: FormGroup): void {
    this.entityForm = formGroup;
  }

  protected override initUpdateCompo(): void {
    this.setForm(this.efbs.getEntityUpdateForm());
    super.initUpdateCompo();
  }

  protected override initDeleteCompo(): void {
    this.setForm(this.efbs.getEntityDeleteForm());
    super.initDeleteCompo();
  }

  protected override setEntry(): void {
    if (this.$entry !== null) {
      this.entityForm.patchValue(this.$entry);
    }
  }
}
