import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntityOneFormBuilderService } from 'src/app/shared/entity-one/entity-one-form-builder.service';
import { EntityOneController } from 'src/app/shared/entity-one/entity-one.controller.service';
import { Newable } from 'src/app/shared/interface/newable';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-update',
  templateUrl: '../../../shared/entity-one/template/update.html'
})
export class CountryUpdateComponent extends EntityOneController<Country> implements OnInit {

  constructor(protected override service: CountryService, protected override route: ActivatedRoute, protected override efbs: EntityOneFormBuilderService, protected override router: Router) { 
    super();
  }

  public override $entry: Country | null = null;
  protected override EntityDomain: Newable<Country> = Country;
  protected override entityBasePath: string = "/country";
  public entityTitle: string = "Country";

  ngOnInit(): void {
    this.setForm(this.efbs.getEntityUpdateForm());
    this.initUpdateCompo();
  }

}
