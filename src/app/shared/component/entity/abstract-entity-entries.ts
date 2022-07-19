import { ParamMap } from '@angular/router';
import { delay, tap } from 'rxjs';

import { AbstractEntity } from '../../entity/abstract-entity';
import { BaseCrudService } from '../../service/shared-service/base-crud.interface';
import { SearchParam } from '../shared-component/search-option/search-param.interface';

export interface DeleteMessage {
  color: string;
  message: string;
}

export interface SearchQuery {
  entry_id: string | null;
  updated_min: string | null;
  page: number | null;
  type: string | null;
  search: string | null;
}

export class AbstractEntityEntries<T> {

    public $entries: AbstractEntity[] = [];
    public lastEntryDate: string = new Date().toString();
    public firstEntryDate: string = new Date().toString();
    public lastEntryId: number = 10;
    public firstEntryId: number = 1;
    public totalCount: number = 0;
    protected service: BaseCrudService<T>;
    private itemDeleteList: number[] = [];
    public currentDeleteStatus: DeleteMessage | null = null;
    public nextPageNumber: number = 0;
    public prevPageNumber: number = 0;
    public isLoading: boolean = false;
    public type: string = "";
    public search: string = "";

    public deleteListMessages: DeleteMessage[] = [
      { 'color': 'red', 'message': 'No entries to delete.'},
      { 'color': 'blue', 'message': 'Please wait or be patient....'},
      { 'color': 'green', 'message': 'Action Successful!!!'},
      { 'color': 'red', 'message': 'Action Unsuccessful!!!'},
      { 'color': 'red', 'message': 'Error has occured!!!'}
    ];

    public trackByItems(index: number, entry: AbstractEntity): number {
      return entry.getId();
    }

    public getItemDeleteList(): number[] {
      return this.itemDeleteList;
    }

    public getDeleteListMessages(): DeleteMessage[] {
      return this.deleteListMessages;
    }

  public initEntries(searchQuery: SearchQuery): void {
    this.service.findEntries(searchQuery)
      .subscribe({
        'next': (entries: T[]) => {
          this.$entries = entries as unknown as AbstractEntity[];
          this.configurePagination(this.$entries);
          let page: number = searchQuery.page !== null ? +(<any>searchQuery.page) : 0;
          this.setNextPrevPageNumber(page);
          this.isLoading = false;
        }
      });
  }

  public processDelete(): void {
    if (this.getItemDeleteList().length < 1) {
      this.currentDeleteStatus = this.getDeleteListMessages()[0];
    }
    else {
      this.service.deleteMany(this.getItemDeleteList())
        .pipe(
          tap(() => this.currentDeleteStatus = this.getDeleteListMessages()[1]),
          delay(5000)
        )
        .subscribe({
          'next': (succeeded: boolean) => {
            this.currentDeleteStatus = this.getDeleteListMessages()[2]
            this.$entries = this.$entries.filter((entry: AbstractEntity) => this.getItemDeleteList().indexOf(entry.getId()) === -1)
          },
          'error': (failed: boolean) => this.currentDeleteStatus = this.getDeleteListMessages()[3]
        });
    }
  }

  public configurePagination(entries: AbstractEntity[]): void {
    if (entries.length > 0) {
      if (entries[entries.length - 1].getUpdatedOn()) { this.lastEntryDate = entries[entries.length - 1].getUpdatedOn().toString(); }
      if (entries[entries.length - 1].getId()) { this.lastEntryId = entries[entries.length - 1].getId(); }
      if (entries[0].getUpdatedOn()) { this.firstEntryDate = entries[entries.length - 1].getUpdatedOn().toString(); }
      if (entries[0].getId()) { this.firstEntryId = entries[entries.length - 1].getId(); }
    }
    this.totalCount = entries.length;
  }

  protected getSearchQuery(updatedMin: string, entryId: string, page: number, type: string, search: string): SearchQuery {
    return {'updated_min': 'updatedMin', entry_id : entryId, page, type, search};
  }

  protected getSearchQueryFromMap(paramMap: ParamMap | Map<string, any>): SearchQuery {
    let updatedMin: string | null = paramMap.get('updated_min') || null;
    let entryId: string | null = paramMap.get('entry_id') || null;
    let page: number | null = +(paramMap.get('page')) | 0;
    let type: string | null = paramMap.get('type') as string || paramMap.get('label') as string || null;
    let search: string | null = paramMap.get('search') as string || paramMap.get('value') as string || null;
    return { 'updated_min': updatedMin, entry_id: entryId , page, type, search };
  }

  protected getSearchQueryFromObject(searchParam: SearchParam): SearchQuery {
      return { 'type' : searchParam.label, 'search' : searchParam.value } as SearchQuery;
  }

  protected setNextPrevPageNumber(page: number): void {
    this.nextPageNumber = page ? page + 1 : 2;
    this.prevPageNumber = page ? page - 1 : 0;
  }

}

