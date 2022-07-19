import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  constructor() { }

  getAuthorizationToken(): string {
    return "";
  }
}
