import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate {


  constructor(private router: Router, public auth: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.auth.auth.authState
                .take(1)
                .map(authState => !!authState)
                .do(authenticated => {
                  if (!authenticated) {
                      alert("Access denied.");
                      this.router.navigate(['']);
                      return false;
                  } else {
                    return true;
                  }
                });
  }
}
