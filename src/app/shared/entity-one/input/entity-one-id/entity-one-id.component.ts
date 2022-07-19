import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-entity-one-id',
  templateUrl: './entity-one-id.component.html'
})
export class EntityOneIdComponent {

  @Input() public isCtrlDisabled: boolean;
  @Input() public entityForm: FormGroup;

  get id(): AbstractControl | null {
    return this.entityForm?.get('id');
  }

  ngOnInit(): void {
    if (this.isCtrlDisabled) this.entityForm?.get('id')?.disable();
  }

}
