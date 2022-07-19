import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-entity-one-description',
  templateUrl: './entity-one-description.component.html'
})
export class EntityOneDescriptionComponent {

  @Input() public isCtrlDisabled: boolean;
  @Input() public entityForm: FormGroup;
  
  get description(): AbstractControl | null {
    return this.entityForm?.get('description');
  }

  ngOnInit(): void {
    if (this.isCtrlDisabled) this.entityForm?.get('description')?.disable();
  }

}
