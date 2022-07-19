import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import {
    PageNotFoundComponent
} from './shared/component/shared-component/page-not-found/page-not-found.component';
import { SharedComponentModule } from './shared/component/shared-component/shared-component.module';

const routes: Routes = [
  {'path': 'country' , 'loadChildren': () => import('./domain/country/country.module').then(m => m.CountryModule)},
  {'path': '' , 'redirectTo': '/country' , 'pathMatch': 'full'},
  {'path': '**', 'component': PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      'preloadingStrategy': PreloadAllModules,
      'onSameUrlNavigation' : 'reload'
    }),
    SharedComponentModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
