import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../service/shared-service/authentication.service';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken: string = this.authenticationService.getAuthorizationToken();

    const authReq = request.clone({
      'setHeaders': {'Authorization': authToken}
    });

    return next.handle(request);
  }
}
