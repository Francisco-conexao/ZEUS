import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RutasGuard implements CanActivate {

    constructor(private router: Router) {
        console.log('hhola');
    }

    async canActivate(){

        this.router.navigateByUrl('home');
        return true
    }

}
