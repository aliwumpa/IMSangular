import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})

class PermissionsService {

  constructor(
    private _authService: AuthService, 
    private _snackBarService: SnackbarService,
    private _router: Router
  ) {}

  canActivate(): boolean {
    if (this._authService.isLoggedIn()) {
      return true;
    } else {
      this._router.navigateByUrl('/login');
      this._snackBarService.openSnackBar('You must login first.', 'Ok', 'IMS-snackbar__warning')
      return false;
    }
  }
}

export const AuthGuard: CanActivateFn = (): boolean => {
  return inject(PermissionsService).canActivate();
}