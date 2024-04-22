import { Component, OnInit } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel'
import { FeaturedService } from 'src/app/services/featured.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.css']
})
export class FeaturedProductComponent implements OnInit {
  featuredData: any[] = [];
  productList: any [] = [];
 constructor(private featuredService : FeaturedService, private productService: ProductService){}
 ngOnInit(): void {
  this.getAllFeaturedData();
  this.productService.getCards().subscribe((res)=>{
    this.productList = res;
    this.productList.forEach((a:any)=>{
      Object.assign(a,{quantity:1,total:a.price})
    })
  })
 }

 getAllFeaturedData(){
  this.featuredService.getAllFeaturedData().subscribe((res)=>{
    this.featuredData = res;
  }, error=>{
    console.log("Something went wrong")
  })
 }

 addToCart(item:any){
  this.productService.addToCard(item)
  console.log(item)
 }
}
