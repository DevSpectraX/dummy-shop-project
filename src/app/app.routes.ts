import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guards';
import { publicGuard } from './core/guards/public.guards';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';

export const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full' },
  { path: 'login', component: Login, canActivate: [publicGuard] },
  { path: 'home', component: Home, canActivate: [authGuard] },
];
