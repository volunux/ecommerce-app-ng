import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryAddComponent } from './country-add/country-add.component';
import { CountryDashboardComponent } from './country-dashboard/country-dashboard.component';
import { CountryDeleteAllComponent } from './country-delete-all/country-delete-all.component';
import { CountryDeleteComponent } from './country-delete/country-delete.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryEntriesComponent } from './country-entries/country-entries.component';
import { CountryUpdateComponent } from './country-update/country-update.component';
import { CountryComponent } from './country/country.component';


const routes: Routes = [
  {'path': '', 'component': CountryComponent,
    'children': [
      { 'path' : '' , 'component': CountryDashboardComponent},
      { 'path': 'entries', 'component': CountryEntriesComponent },
      { 'path': 'add', 'component': CountryAddComponent },
      { 'path': 'detail/:id', 'component': CountryDetailComponent },
      { 'path': 'update/:id', 'component': CountryUpdateComponent },
      { 'path': 'delete/:id', 'component': CountryDeleteComponent },
      { 'path': 'delete/entries/all', 'component': CountryDeleteAllComponent }
    ]}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
