import { HttpIntercepterBasicAuthService } from './service/http/http-intercepter-basic-auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BookingsComponent } from './bookings/bookings.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookingsComponent,
    LogoutComponent,
    ErrorComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    // We add this provider so that intercepter is resgistered
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
