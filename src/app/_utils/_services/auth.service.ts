import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setUserInfo(userInfo) {
    localStorage.setItem('fx-user', userInfo);
  }

  getUserInfo() {
    return JSON.parse(localStorage.getItem('fx-user'));
  }
}
