import {
    SharedComponentModule
} from 'src/app/shared/component/shared-component/shared-component.module';
import { EntityOneModule } from 'src/app/shared/entity-one/entity-one.module';
import { SharedServiceModule } from 'src/app/shared/service/shared-service/shared-service.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CountryAddComponent } from './country-add/country-add.component';
import { CountryDashboardComponent } from './country-dashboard/country-dashboard.component';
import { CountryDeleteComponent } from './country-delete/country-delete.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryEntriesComponent } from './country-entries/country-entries.component';
import { CountryRoutingModule } from './country-routing.module';
import { CountryUpdateComponent } from './country-update/country-update.component';
import { CountryService } from './country.service';
import { CountryComponent } from './country/country.component';
import { SharedTemplateModule } from 'src/app/shared/template/shared-template/shared-template.module';
import { CountryDeleteAllComponent } from './country-delete-all/country-delete-all.component';

@NgModule({
  declarations: [
    CountryComponent,
    CountryAddComponent,
    CountryUpdateComponent,
    CountryDeleteComponent,
    CountryEntriesComponent,
    CountryDetailComponent,
    CountryDashboardComponent,
    CountryDeleteAllComponent,
  ],
  providers: [CountryService],
  imports: [
    CommonModule,
    CountryRoutingModule,
    EntityOneModule,
    SharedComponentModule,
    ReactiveFormsModule,
    SharedServiceModule,
    SharedTemplateModule
  ]
})
export class CountryModule { }
