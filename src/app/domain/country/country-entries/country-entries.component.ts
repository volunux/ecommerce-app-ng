import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AbstractEntityEntries, SearchQuery } from 'src/app/shared/component/entity/abstract-entity-entries';
import { SearchParam } from 'src/app/shared/component/shared-component/search-option/search-param.interface';
import { Country } from '../country';
import { CountryService } from '../country.service';



@Component({
  selector: 'app-country-entries',
  templateUrl: '../../../shared/entity-one/template/entries.html',
  styleUrls: ['../../../../assets/css/internal-one.css']
})
export class CountryEntriesComponent extends AbstractEntityEntries<Country> implements OnInit {

  constructor(protected override service: CountryService, private route: ActivatedRoute, private router: Router) { 
    super();
  }

  public override $entries: Country[] = [];
  public entityTitle: string = "Country";
  public entityTitles: string = "Countries";
  public searchCriteria: SearchParam[] = [
    {'label': 'Title', 'value': 'title'}
  ];

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((queryParams: ParamMap) => {
      this.isLoading = true;
      this.initEntries({} as SearchQuery);
    });
  }

  public onSearch(data: SearchParam | null): void {
      this.isLoading = true;
      this.$entries = [];
      this.initEntries(this.getSearchQueryFromObject(data as SearchParam));
  }

  public clearRes(res: any): void {
    this.isLoading = false;
    window.location.reload();
  }

  public pageNavigation(data: any) {
    const type: string = this.type;
    const search: string = this.search;
    this.initEntries({...data, type, search} as SearchQuery)
  }

}
