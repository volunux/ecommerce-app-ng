import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpValidationInterceptor } from './http-validation.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedServiceModule } from '../../service/shared-service/shared-service.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedServiceModule
  ],
  providers: [
    { 'provide': HTTP_INTERCEPTORS, useClass: HttpValidationInterceptor, multi: true}
  ],
  exports: [HttpClientModule]
})
export class SharedInterceptorModule { }
