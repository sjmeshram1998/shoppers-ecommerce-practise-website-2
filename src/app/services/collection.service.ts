import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  collectionUrl = 'http://localhost:3000/collections';
  constructor(private http: HttpClient) { }
  
  getCollection(){
    return this.http.get<any>(this.collectionUrl)
  }
}
