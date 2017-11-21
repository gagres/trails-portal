import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router'

@Injectable()
export class LoginGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {
        
        return true;
    }
}