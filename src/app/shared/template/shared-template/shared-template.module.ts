import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryDeleteAllComponent } from './entry-delete-all/entry-delete-all.component';



@NgModule({
  declarations: [
    EntryDeleteAllComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EntryDeleteAllComponent
  ]
})
export class SharedTemplateModule { }
