import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Token } from '../classes/token';
import { PkgResponse } from '../classes/pkg-response';
import { DialogType } from '../classes/dialog-type';
import { DeleteRequest } from '../classes/delete-request';

@Injectable({
  providedIn: 'root'
})
export class CommonsService {

  private default_url: string = "http://localhost:8080";
  public error!: Error;
  @Output() OnError = new EventEmitter();
  @Output() OnShowDeleteDialog = new EventEmitter();

  constructor(private http: HttpClient, private router: Router) {
  }

  public Get(pkg: string, func: string = ''){
    if(func == '')
      return this.http.get(this.default_url + '/api/' + pkg, { });
    else
      return this.http.get(this.default_url + '/api/' + pkg + '/' + func);
  }
  public Post(pkg: string, func: string, valore: any){
    if(func == ''){
      return this.http.post(this.default_url + '/api/' + pkg, valore);
    }
    else
      return this.http.post(this.default_url + '/api/' + pkg + '/' + func, valore);
  }
  public Delete(pkg: string, func: string, valore: string){
    if(func == '')
      return this.http.delete(this.default_url + '/api/' + pkg + '?ID=' + valore);
    else
      return this.http.delete(this.default_url + '/api/' + pkg + '/' + func + '?ID=' + valore);
  }
  public Put(pkg: string, valore: any, func: string = ''){
    if(func == ''){
      return this.http.put(this.default_url + '/api/' + pkg, valore);
    }
    else
      return this.http.put(this.default_url + '/api/' + pkg + '/' + func, valore);
  }
  public setToken(cookie: Token){
    window.sessionStorage.setItem(cookie.Name, cookie.Value);
  }
  public getToken(name: string): string | null{
    if(!window.sessionStorage.getItem(name)) return null;
    return window.sessionStorage.getItem(name);
  }
  public isLogged(): boolean{
    if(!window.sessionStorage.getItem("Authorization")) return false;
    return true;
  }
  public Logout(){
    window.sessionStorage.removeItem("Authorization");
  }
  public Redirect(path: string){
    this.router.navigate([path]);
  }
  public Download(pkg: string, func: string = ''){
    if(func == '')
      return this.http.get(this.default_url + '/' + pkg, { responseType: 'blob' });
    else
      return this.http.get(this.default_url + '/' + pkg + '/' + func, { responseType: 'blob' });
  }
  public Upload(pkg: string, uploadData: FormData){
    return this.http.post(this.default_url + '/' + pkg, uploadData, { reportProgress: true, observe: 'events' });
  }
  public FormatResponse(result: Object): PkgResponse {
    return new PkgResponse(result);
  }
  public SetError(_error: Error) {
    this.error = _error;
    this.OnError.emit(this.error);
  }
  public ShowDeleteDialog(record: DeleteRequest) {
    this.OnShowDeleteDialog.emit(record);
  }
}
