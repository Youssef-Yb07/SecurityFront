import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService  implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('token'); // Récupérer le token depuis le stockage local

    if (token) {
      // Cloner la requête et ajouter l'en-tête d'autorisation avec le token
      const clonedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

      // Poursuivre la requête avec le nouveau clone
      return next.handle(clonedRequest);
    }

    // Si aucun token n'est disponible, poursuivre la requête telle quelle
    return next.handle(request);
  }

}
