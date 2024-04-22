import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeaturedService {

  constructor(private http: HttpClient) { }
  getAllFeaturedData():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:3000/products')
  }
  
}
