import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseCrudServiceImpl } from '../../shared/service/shared-service/base-crud.service';
import { Country } from './country';



@Injectable()
export class CountryService extends BaseCrudServiceImpl<Country> {

  protected override entityBasePath: string = "api/country"

  constructor(protected override httpClient: HttpClient) {
    super(httpClient, Country);
  }
}
