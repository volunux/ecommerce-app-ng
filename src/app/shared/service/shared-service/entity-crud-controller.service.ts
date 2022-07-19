import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ValidationError } from '../../component/shared-component/validation-error/validation-error.interface';
import { Newable } from '../../interface/newable';
import { BaseCrudServiceImpl } from './base-crud.service';

export abstract class EntityCrudController<T> {

  public $entry: T | null = null;
  public errMsgObj: ValidationError | null = null;
  public errMsgSingle: string = "";
  protected abstract entityBasePath: string;
  protected abstract EntityDomain: Newable<T>;
  public entityId: number;
  protected route: ActivatedRoute;
  protected service: BaseCrudServiceImpl<T>;
  protected router: Router;
  public entriesAvailable: boolean = false;

  constructor() {

  }

  protected setEntry(): void {

  };

  public initDetailCompo(): void {
    this.route.paramMap.subscribe((param) => {
      const id = Number(param.get('id'));
      this.service.findOne(id)
        .subscribe({
          'next': (entry: T | null) => {
            this.$entry = entry;
          },
          'error': (error: any) => {
            console.log(error);
          },
          'complete': () => console.log('Complete')
        })
    });

  }

  public onCreateEntity(data: any): void {
    this.$entry = new (this.EntityDomain)(data);
    this.service.saveOne(this.$entry as T)
      .subscribe({
        'next': (entry: T | null) => {
          this.$entry = entry;
          this.goBackToEntries();
        },
        'error': (error: any) => {
          if (('errorType' in error) && error['errorType'] === 'dataValidation') {
            this.errMsgObj = error.errors;
          }
          else {
            this.errMsgSingle = error.message;
          }
        },
        'complete': (() => "")
      });
  }

  public onUpdateEntity(data: any): void {
    this.$entry = new (this.EntityDomain)(data);
    this.service.updateOne(this.entityId, this.$entry)
      .subscribe({
        'next': (entry: T | null): void => {
          this.$entry = entry;
          this.goBackToEntries();
        },
        'error': (error: any) => {
          if (('errorType' in error) && error['errorType'] === 'dataValidation') {
            this.errMsgObj = error.errors;
          }
          else {
            this.errMsgSingle = error.message;
          }
        },
        'complete': (() => "")
      });
  }

  public onDeleteEntity(data: any): void {
    this.service.deleteOne(this.entityId)
      .subscribe({
        'next': (entry: boolean): void => {
          this.goBackToEntries();
        },
        'error': (error: any) => {
          if (('errorType' in error) && error['errorType'] === 'dataValidation') {
            this.errMsgObj = error.errors;
          }
          else {
            this.errMsgSingle = error.message;
          }
        },
        'complete': (() => "")
      });
  }

  protected initAddCompo(): void {

  }

  protected initUpdateCompo(): void {
    this.route.paramMap.subscribe((param: ParamMap): any => {
      this.entityId = Number(param.get('id'));

      this.service.findOne(this.entityId)
        .subscribe({
          'next': (entry: T | null): void => {
            this.$entry = entry;
            this.setEntry();
          }
        });
    });
  }

  protected initDeleteCompo(): void {
    this.route.paramMap.subscribe((param: ParamMap): any => {
      this.entityId = Number(param.get('id'));

        this.service.findOne(this.entityId)
        .subscribe({
          'next': (entry: T | null): void => {
            this.$entry = entry;
            this.setEntry();
          },
          'error': (error: any) => {
            if (('errorType' in error) && error['errorType'] === 'dataValidation') {
              this.errMsgObj = error.errors;
            }
            else {
              this.errMsgSingle = error.message;
            }
          },
          'complete': (() => "")
        });
    });
  }

  protected goBackToEntries(): void {
    if (this.entityBasePath === "/") {
      this.router.navigate([this.entityBasePath]);
    }
    else {
      this.router.navigate([`${this.entityBasePath}/entries`])
    }
  }


}
