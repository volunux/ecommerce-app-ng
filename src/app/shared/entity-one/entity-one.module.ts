import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EntityOneFormBuilderService } from './entity-one-form-builder.service';
import { EntityOneController } from './entity-one.controller.service';
import { EntityOneDescriptionComponent } from './input/entity-one-description/entity-one-description.component';
import { EntityOneIdComponent } from './input/entity-one-id/entity-one-id.component';
import { EntityOneTitleComponent } from './input/entity-one-title/entity-one-title.component';
import { EntityOneDescriptionValMsgComponent } from './validator/message/entity-one-description-val-msg/entity-one-description-val-msg.component';
import { EntityOneTitleValMsgComponent } from './validator/message/entity-one-title-val-msg/entity-one-title-val-msg.component';
import { EntityOneValidatorsService } from './validator/message/entity-one-validators.service';



@NgModule({
  declarations: [
    EntityOneTitleComponent,
    EntityOneDescriptionComponent,
    EntityOneIdComponent,
    EntityOneTitleValMsgComponent,
    EntityOneDescriptionValMsgComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    EntityOneTitleComponent,
    EntityOneDescriptionComponent,
    EntityOneIdComponent,
    EntityOneTitleValMsgComponent,
    EntityOneDescriptionValMsgComponent,
  ],
  providers: [EntityOneFormBuilderService, EntityOneValidatorsService]
})
export class EntityOneModule { }
