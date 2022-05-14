import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, CanLoad, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Route } from '../classes/route';
import { CommonsService } from './commons.service';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class RoleGuardService implements CanActivate {

  constructor(public service: CommonsService, public router: Router) { }
  //Call the web api and check if the user has the correct authorization to open this route
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    //Transgorm the path in a Route class
    let currentRoute = new Route();
    if((route.routeConfig != null) && (route.routeConfig.path != null)) {
      if(route.routeConfig.path.startsWith("be")) {
        currentRoute.Type = "be";
        currentRoute.Func = route.routeConfig.path.substring(3);
      }
      else {
        currentRoute.Func = route.routeConfig.path;
      }
    }
    currentRoute.Package = "page";
    currentRoute.Methods = "GET";
    return this.service.Post("route", "check", currentRoute).pipe(
      map((result: Object) => {
        return this.service.FormatResponse(result).Data as boolean;
      })
    );
  }
}
