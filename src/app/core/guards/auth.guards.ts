import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { USER_SESSION_KEY } from '../config/constants/auth-dummyjson.constants';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const token = localStorage.getItem(USER_SESSION_KEY);
  return token ? true : router.navigate(['/login']);
};

// TODO: Mejorar authGuard para que devuelva true si el token aun es valido
