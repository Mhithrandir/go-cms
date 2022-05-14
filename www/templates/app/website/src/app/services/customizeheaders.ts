import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomizeHeaders implements HttpInterceptor{
    constructor() {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // var jwsTojken = this.service.getToken("Authorization");
        let jwsTojken: any;
        if(window.sessionStorage.getItem("Authorization")){
            jwsTojken = window.sessionStorage.getItem("Authorization");
        }
        //with this method i read the authorization token and i write it in a custom header
        let authReq = req.clone();
        if (jwsTojken != null)
            authReq = req.clone({ headers: req.headers.set('Authorization', jwsTojken) });
        var result: Observable<HttpEvent<any>>;
        try{
            result = next.handle(authReq);
            return result;
        }
        catch(error: any){
            console.error(error);
            //return the error to the method that called it
            if (error.status === 401) {
              //it means the cookies is expired, i must show the login page
            }
            return Observable.throw(error);
        }
    }
}
