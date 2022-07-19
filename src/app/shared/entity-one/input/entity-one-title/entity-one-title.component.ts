import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-entity-one-title',
  templateUrl: './entity-one-title.component.html'
})
export class EntityOneTitleComponent {

  @Input() public isCtrlDisabled: boolean;
  @Input() public entityForm: FormGroup;

  get title(): AbstractControl | null {
    return this.entityForm?.get('title');
  }

  ngOnInit(): void {
    if (this.isCtrlDisabled) this.entityForm?.get('title')?.disable();
  }

}
