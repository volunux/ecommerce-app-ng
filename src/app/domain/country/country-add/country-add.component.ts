import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntityOneFormBuilderService } from 'src/app/shared/entity-one/entity-one-form-builder.service';
import { EntityOneController } from 'src/app/shared/entity-one/entity-one.controller.service';
import { Newable } from 'src/app/shared/interface/newable';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-add',
  templateUrl: '../../../shared/entity-one/template/add.html'
})
export class CountryAddComponent extends EntityOneController<Country> implements OnInit {

  protected override EntityDomain: Newable<Country> = Country;
  protected override entityBasePath: string = "/country";
  public override $entry: Country | null = null;
  public entityTitle: string = "Country";

  constructor(protected override route: ActivatedRoute, protected override router: Router, protected override efbs: EntityOneFormBuilderService, protected override service: CountryService) {
    super();
  }

  ngOnInit(): void {
    this.setForm(this.efbs.getEntityCreateForm());
    this.initAddCompo();
  }

}
