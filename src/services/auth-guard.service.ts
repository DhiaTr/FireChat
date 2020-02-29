import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private Auth: AuthService
  ) { }

  // canActivate() {
  //   this.Auth.getUser()
  //     .subscribe(val => {
  //       if (val) return true;
  //       this.router.navigate(['/login']);
  //       return false;
  //     });
  //   // put the code in the observable if you cant wait

  // }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.Auth.getUser().pipe(
      map(e => {
        if (e) {
          return true;
        } else {
          this.router.navigate(['/login']);
        }
      }),
      catchError((err) => {
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }

}

