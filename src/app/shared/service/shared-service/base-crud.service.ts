import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, delay, map, Observable, ObservableInput, retry, tap, throwError } from 'rxjs';
import { SearchQuery } from '../../component/entity/abstract-entity-entries';
import { Newable } from '../../interface/newable';
import { BaseCrudService } from './base-crud.interface';


export class BaseCrudServiceImpl<T> implements BaseCrudService<T>  {

  protected entityBasePath: string = "api";
  protected apiHost: string = "http://localhost:4000"; 
  protected apiRequestRetryTimes: number = 3;
  protected readonly EntityDomain: Newable<T>;

  constructor(protected httpClient: HttpClient, EntityDomain: Newable<T>) {
    this.EntityDomain = EntityDomain;
  }

  public findEntries(searchQuery: SearchQuery): Observable<T[]> {
    const params: HttpParams = new HttpParams({'fromObject' : searchQuery as any})
    const options: any = { 'params': params};

    return this.httpClient.get<T[]>(`${this.apiHost}/${this.entityBasePath}/entries`, options)
      .pipe(
        retry(this.apiRequestRetryTimes),
        delay(5000),
        map((res: any) => res.map((entry: any) => {
          return new (this.EntityDomain)(entry);
        })),
        tap((value: any) => console.log(value)),
        catchError((err: any) => this.errorHandler(err))
      );
  }

  public findOne(id: number): Observable<T | null> {
    return this.httpClient.get<T>(`${this.apiHost}/${this.entityBasePath}/detail/${id}`)
      .pipe(
        retry(this.apiRequestRetryTimes),
        tap((value: any) => console.log(value)),
        map((res: any) => new (this.EntityDomain)(res)),
        catchError((err: any) => this.errorHandler(err))
      );
  }

  public addOne(): Observable<T> {
    return this.httpClient.get<T>(`${this.apiHost}/${this.entityBasePath}/add`)
      .pipe(
        retry(this.apiRequestRetryTimes),
        tap((value: any) => console.log(value)),
        map((res: any) => res.json()),
        catchError((err: any) => this.errorHandler(err))
      );
  }

  public saveOne(entry: T): Observable<T> {
    return this.httpClient.post<T>(`${this.apiHost}/${this.entityBasePath}/save/`, entry)
      .pipe(
        retry(this.apiRequestRetryTimes),
        tap((value: any) => console.log(value)),
        map((res: any) => new (this.EntityDomain)(res)),
        catchError((err: any) => this.errorHandler(err.error))
      ) as Observable<T>;
  }

  public updateOne(id: number, entry: T): Observable<T> {
    return this.httpClient.put<T>(`${this.apiHost}/${this.entityBasePath}/update/${id}`, entry)
      .pipe(
        retry(this.apiRequestRetryTimes),
        tap((value: any) => console.log(value)),
        map((res: any) => new (this.EntityDomain)(res)),
        catchError((err: any) => this.errorHandler(err.error))
      );
  }

  public deleteOne(id: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(`${this.apiHost}/${this.entityBasePath}/delete/${id}`)
      .pipe(
        retry(this.apiRequestRetryTimes),
        tap((value: any) => console.log(value)),
        map((res: any) => res),
        catchError((err: any) => this.errorHandler(err))
      );

  }

  public deleteMany(ids: number[]): Observable<boolean> {
    return this.httpClient.put<boolean>(`${this.apiHost}/${this.entityBasePath}/remove/many`, { 'ids': ids })
      .pipe(
        retry(this.apiRequestRetryTimes),
        tap((value: any) => console.log(value)),
        map((res: any) => res),
        catchError((err: any) => this.errorHandler(err))
      );
  }

  public removeAll(): Observable<boolean> {
    return this.httpClient.get<boolean>(`${this.apiHost}/${this.entityBasePath}/delete/entries/all`)
      .pipe(
        retry(this.apiRequestRetryTimes),
        tap((value: any) => console.log(value)),
        map((res: any) => res),
        catchError((err: any) => this.errorHandler(err))
      );
  }

  public deleteAll(): Observable<boolean> {
    return this.httpClient.post<boolean>(`${this.apiHost}/${this.entityBasePath}/delete/entries/all`, {})
      .pipe(
        retry(this.apiRequestRetryTimes),
        tap((value: any) => console.log(value)),
        map((res: any) => res),
        catchError((err: any) => this.errorHandler(err))
      );
  }

  private errorHandler(err: any): ObservableInput<any> {
    return throwError(() => err);
  }

}
