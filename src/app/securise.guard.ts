import { Injectable } from '@angular/core';
import { CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { ConnexionService } from './services/connexion.service';


@Injectable({
  providedIn: 'root'
})
export class SecuriseGuard implements CanLoad {

  constructor(private route:Router, private connexion:ConnexionService){}

  canLoad(
    route: Route,
    urlsegment: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      // On récupère la donnée sur le service d'authentification
      if(this.connexion.connecte){
        console.log("coucou");
        return true;
      }
  }
}
