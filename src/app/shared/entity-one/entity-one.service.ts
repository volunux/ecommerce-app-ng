import { Injectable } from '@angular/core';
import { Newable } from '../interface/newable';
import { AbstractEntity } from '../entity/abstract-entity';

export abstract class EntityOneService<T> {

  protected abstract Domain: Newable<T>;

  protected entries: AbstractEntity[] = [];

  protected abstract getEntries(): AbstractEntity[];

  public findEntries(): any[] {
    return this.getEntries();
  }

  public findOne(id: number): T | null {
    const entry: T | undefined = this.getEntries().find((entry: AbstractEntity) => entry.getId() === id) as unknown as T;
    if (entry !== undefined) return entry
    else return null;
  }

  public addOne(): T {
    return new this.Domain({});
  }

  public saveOne(entry: T): T {
    return {} as T;
  }

  public updateOne(id: number, entry: T): T {
    this.entries[(id ? 0 : id - 1)] = entry as unknown as AbstractEntity;
    return entry;
  }

  public deleteOne(id: number): boolean {
    this.entries = this.entries.filter((entry: AbstractEntity) => entry.getId() !== id);
    return true;
  }
}
