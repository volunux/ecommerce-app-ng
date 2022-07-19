import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Newable } from 'src/app/shared/interface/newable';
import { EntityCrudController } from 'src/app/shared/service/shared-service/entity-crud-controller.service';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: '../../../shared/entity-one/template/detail.html',
})
export class CountryDetailComponent extends EntityCrudController<Country> implements OnInit {

  public override $entry: Country | null;
  protected override EntityDomain: Newable<Country> = Country;
  protected override entityBasePath: string = "/country";
  public entityTitle: string = "Country";

  constructor(protected override route: ActivatedRoute, protected override router: Router, protected override service: CountryService) {
    super();
   }

  ngOnInit(): void {
    this.initDetailCompo();
  }

}
