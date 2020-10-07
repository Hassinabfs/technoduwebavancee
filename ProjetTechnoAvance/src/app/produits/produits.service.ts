import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  private urlBase: string = "http://localhost:8888/"

  constructor(private http: HttpClient) { }
  getProduits(): Observable<any> {
    let url = this.urlBase+'produits';
    console.log("We are in the service produitsService with "+url);
    return this.http.get(url);
  }
  
  getCategories(): Observable<any> {
    let url = this.urlBase+'categories';
    console.log("We are in the service categoriesService with "+url);
    return this.http.get(url);
  }

  getTypes(): Observable<any> {
    let url = this.urlBase+'categories/types';
    console.log("We are in the service categoriesService with "+url);
    return this.http.get(url);
  }
}
