import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FeaturedService } from './featured.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public productList = new BehaviorSubject<any>([]);
  public cartItems : any[]= []   
  constructor(private http: HttpClient,private featuredService: FeaturedService ) { }

  getCards(){
    return this.productList.asObservable();
  }
  
  addToCard(item:any){
    this.cartItems.push(item);
    this.productList.next(this.cartItems);
    this.getTotalPrice();
  }
  getTotalPrice():number{
    let grandTotal = 0;
      grandTotal = this.cartItems.reduce((total, item)=>{
      return total + item.price * item.quantity
    }, 0)
    return grandTotal;
  }
 
}

