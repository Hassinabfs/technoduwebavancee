import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from'rxjs/operators';
import { Subject,BehaviorSubject } from 'rxjs';
import { observable} from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods': 'GET, POST',
    'Access-Control-Allow-Headers': 'Content-Type'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private user: Subject <string>=new BehaviorSubject<string>(undefined);
  private baseURL: string = "http://localhost:8888";


  constructor(private http: HttpClient) { }
  getUser(){return this.user;}
  connect(data:string){this.user.next(data);}
  disconnect(){this.user.next(null);}
  verificationConnexion(username):Observable<any>{
    return this.http.post(this.baseURL+'/login',JSON.stringify(username),httpOptions)};
  }

