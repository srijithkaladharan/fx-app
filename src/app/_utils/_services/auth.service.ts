import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router
  ) { }

  logout() {
    this.clearUserInfo();
    this.router.navigateByUrl('/login');
  }

  async setUserInfo(userInfo) {
    await localStorage.setItem('fx-user', JSON.stringify(userInfo));
    return new Promise(resolve => resolve(true));
  }

  getUserInfo() {
    return JSON.parse(localStorage.getItem('fx-user'));
  }

  async getUserInfoPromise(): Promise<string> {
    return await JSON.parse(localStorage.getItem('fx-user'));
  }

  clearUserInfo() {
    localStorage.removeItem('fx-user');
    localStorage.removeItem('fx-branch');
  }
}
