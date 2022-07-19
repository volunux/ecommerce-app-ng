import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { finalize, Observable, tap } from 'rxjs';

@Injectable()
export class HttpLoggingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const started: number = Date.now();
    let ok: string;
    return next.handle(request)
      .pipe(
        tap({
          'next': (event: HttpEvent<unknown>) => (ok = event instanceof HttpResponse ? 'succeeded' : ''),
          'error': (error: any) => (ok = 'failed')
        }),
        finalize(() => {
          const elapsed: number = Date.now() - started;
          const msg = `${request.method} "${request.urlWithParams}" ${ok} in ${elapsed} ms`;
          console.log(msg);
        })
      );
  }
}
