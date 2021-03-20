import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor( private router: Router) {}
  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('pass');
  }
  isLoggedIn() {
    if (this.isUserAvailable()) {
      return true;
    }
    return false;
  }
  isUserAvailable() {
    const user = localStorage.getItem('user');
    if (user !== null && user !== undefined) return true;
    return false;
  }
}