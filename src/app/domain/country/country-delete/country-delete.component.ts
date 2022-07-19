import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EntityOneFormBuilderService } from 'src/app/shared/entity-one/entity-one-form-builder.service';
import { EntityOneController } from 'src/app/shared/entity-one/entity-one.controller.service';
import { Newable } from 'src/app/shared/interface/newable';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-delete',
  templateUrl: '../../../shared/entity-one/template/delete.html'
})
export class CountryDeleteComponent extends EntityOneController<Country> implements OnInit {

  constructor(protected override service: CountryService, protected override router: Router, protected override route: ActivatedRoute, protected override efbs: EntityOneFormBuilderService) {
    super();
  }

  protected override EntityDomain: Newable<Country> = Country;
  public override $entry: Country | null = null;
  public entityTitle: string = "Country";
  protected override entityBasePath: string = "/country";


  ngOnInit(): void {
    this.setForm(this.efbs.getEntityDeleteForm());
    this.initDeleteCompo();
  }

  override get isControlDisabled(): boolean {
      return true;
  }

}
