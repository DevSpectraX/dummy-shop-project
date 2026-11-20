import { CanActivateFn, Router } from "@angular/router";
import { USER_SESSION_KEY } from "../config/constants/auth-dummyjson.constants";
import { inject } from "@angular/core";

export const publicGuard: CanActivateFn = ()=>{
    const router = inject(Router);
    const token = localStorage.getItem(USER_SESSION_KEY);
    return token ? router.navigate(['/home']) : true;

}