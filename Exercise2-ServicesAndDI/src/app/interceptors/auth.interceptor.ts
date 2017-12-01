import { Injectable } from "@angular/core";
import {Observable} from 'rxjs/Observable'
import {HttpHandler,HttpRequest,HttpInterceptor,HttpEvent} from '@angular/common/http'

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        req=req.clone({
            headers:req.headers.
            set('Authorization',sessionStorage.getItem('authToken'))
            .set('Content-Type','application/json')
        })

        return next.handle(req)
        
    }
    

}