import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router
  ) {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('username');
  }

  logout(): void {
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }
}