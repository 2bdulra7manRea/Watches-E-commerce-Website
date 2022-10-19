import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
import { ProductDetailsComponent } from './pages/product/product-details/product-details.component';
import { ProductItemComponent } from './pages/product/product-item/product-item.component';
import { CartProductsComponent } from './pages/cart/cart-products/cart-products.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {StoreModule} from '@ngrx/store'
import { Reducer, ReducerAddToCart } from './core/service/_Reducers/watches';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AccountUserComponent } from './pages/account-user/account-user.component';
import { CardComponent } from './components/card/card.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductItemComponent,
    CartProductsComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AccountUserComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FontAwesomeModule,
    MatButtonModule,
    MatPaginatorModule,
    HttpClientModule,
    MatSnackBarModule,
    StoreModule.forRoot({Item:Reducer , CartItem:ReducerAddToCart})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
