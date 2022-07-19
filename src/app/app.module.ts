import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/component/shared-component/footer/footer.component';
import { HeaderComponent } from './shared/component/shared-component/header/header.component';
import { SharedComponentModule } from './shared/component/shared-component/shared-component.module';
import {
    SharedInterceptorModule
} from './shared/interceptor/shared-interceptor/shared-interceptor.module';
import { SharedServiceModule } from './shared/service/shared-service/shared-service.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedComponentModule,
    SharedServiceModule,
    SharedInterceptorModule
  ],
  providers: [],
  bootstrap: [AppComponent, FooterComponent, HeaderComponent]
})
export class AppModule { }
