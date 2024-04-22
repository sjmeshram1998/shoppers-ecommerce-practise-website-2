import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import { CollectionComponent } from './components/collection/collection.component';
import { HttpClientModule } from '@angular/common/http';
import { FeaturedProductComponent } from './components/featured-product/featured-product.component';
import { SaleComponent } from './components/sale/sale.component';
import { CartComponent } from './components/cart/cart.component';
// import { OwlModule } from 'ngx-owl-carousel'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    HomeComponent,
    CollectionComponent,
    FeaturedProductComponent,
    SaleComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    // OwlModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
