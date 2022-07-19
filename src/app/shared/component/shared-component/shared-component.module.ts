import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChangesMenuComponent } from './changes-menu/changes-menu.component';
import { DeleteOptionComponent } from './delete-option/delete-option.component';
import { EmptyCartComponent } from './empty-cart/empty-cart.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NoEntriesComponent } from './no-entries/no-entries.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchOptionComponent } from './search-option/search-option.component';
import { NoEntryDetailComponent } from './no-entry-detail/no-entry-detail.component';
import { NoEntryUpdateDeleteComponent } from './no-entry-update-delete/no-entry-update-delete.component';
import { ValidationErrorComponent } from './validation-error/validation-error.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    SearchOptionComponent,
    DeleteOptionComponent,
    PaginationComponent,
    NoEntriesComponent,
    NavBarComponent,
    HeaderComponent,
    ChangesMenuComponent,
    EmptyCartComponent,
    FooterComponent,
    NoEntryDetailComponent,
    NoEntryUpdateDeleteComponent,
    ValidationErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    PageNotFoundComponent,
    SearchOptionComponent,
    DeleteOptionComponent,
    PaginationComponent,
    NoEntriesComponent,
    NavBarComponent,
    HeaderComponent,
    ChangesMenuComponent,
    EmptyCartComponent,
    FooterComponent,
    NoEntryDetailComponent,
    NoEntryUpdateDeleteComponent,
    ValidationErrorComponent
  ]
})
export class SharedComponentModule { }
