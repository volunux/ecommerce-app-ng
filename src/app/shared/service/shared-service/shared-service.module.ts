import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from './authentication.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    AuthenticationService
  ]
})
export class SharedServiceModule { }
