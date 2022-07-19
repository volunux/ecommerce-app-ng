import { Component, OnInit } from '@angular/core';
import { EntityOneController } from 'src/app/shared/entity-one/entity-one.controller.service';
import { CountryService } from '../country.service';
import { Newable } from 'src/app/shared/interface/newable';
import { Country } from '../country';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-delete-all',
  templateUrl: './country-delete-all.component.html'
})
export class CountryDeleteAllComponent extends EntityOneController<Country> implements OnInit {

  protected entityBasePath: string = "api/country";
  protected override EntityDomain: Newable<Country> = Country;
  public entityTitle: string = "Country";

  constructor(protected override service: CountryService, protected override router: Router) { 
    super();
  }

  ngOnInit(): void {
    this.initDeleteAll();
  }



}
