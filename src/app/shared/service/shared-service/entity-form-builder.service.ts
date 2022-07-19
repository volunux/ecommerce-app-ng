import { FormGroup } from "@angular/forms";

export abstract class EntityFormBuilderService {

  constructor() { }

  protected abstract getDefaultForm(): FormGroup;

  public getEntityForm(): FormGroup {
    return this.getDefaultForm();
  }

  public getEntityCreateForm(): FormGroup {
    return this.getDefaultForm();
  }

  public getEntityUpdateForm(): FormGroup {
    return this.getDefaultForm();
  }

  public getEntityDeleteForm(): FormGroup {
    return this.getDefaultForm();
  }
}
