import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[]=[];
  public grandTotal:number = 0; 
constructor(private productService: ProductService){}

ngOnInit(): void {
  this.productService.getCards().subscribe((res)=>{
    this.cartItems = res;
   this.grandTotal = this.productService.getTotalPrice();
  },error=>{
    console.log("Something went wrong")
})
}
  
}
