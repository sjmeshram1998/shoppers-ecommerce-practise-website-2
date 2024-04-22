import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem = 0;
  constructor(private productService: ProductService){}
  ngOnInit(): void {
    this.productService.getCards().subscribe((res)=>{
      this.totalItem = res.length
    })
  }
}
