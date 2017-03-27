import { Injectable } from '@angular/core';


@Injectable()
export class lsService {

  getToken(): String {
    return window.localStorage['lsToken'];
  }

  saveToken(token: String) {
    window.localStorage['lsToken'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('lsToken');
  }

}
