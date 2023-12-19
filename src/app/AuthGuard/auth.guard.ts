import { CanActivateFn, Router } from '@angular/router';

import { inject } from '@angular/core';
import {AuthService} from "../Services/auth.service";

export const authGuard: CanActivateFn = (route, state) => {
  var isLoggedIn: boolean = inject(AuthService).isLoggedIn();

  if (!isLoggedIn) {
    inject(Router).navigate(['/login']);
  }

  return isLoggedIn;
};
