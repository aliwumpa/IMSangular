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

  isAdmin(role: string): boolean {
    if(role === 'admin') {
      return true;
    }
    return false;
  }

  isStaff(role: string): boolean {
    if(role === 'staff') {
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }
}