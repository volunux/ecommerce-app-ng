import { Observable } from "rxjs";
import { SearchQuery } from "../../component/entity/abstract-entity-entries";

export interface BaseCrudService<T> {

  findEntries(searchQuery: SearchQuery): Observable<T[]>;

  findOne(id: number): Observable<T | null>;

  addOne(): Observable<T>;

  saveOne(entry: T): Observable<T>;

  updateOne(id: number, entry: T): Observable<T>;

  deleteOne(id: number): Observable<boolean>;

  deleteMany(ids: number[]): Observable<boolean>;
}
