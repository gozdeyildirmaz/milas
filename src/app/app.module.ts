import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CarouselComponent} from './carousel/carousel.component';
import {ProductsComponent} from './products/products.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    ProductsComponent,
    HomeComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'info', component: InfoComponent},
      { path: '**', redirectTo: "/"}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
