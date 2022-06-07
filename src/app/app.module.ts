import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TicketComponent } from './ticket/ticket.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const myRoutes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "ticket", component: TicketComponent },
  { path: "**", component: ErrorComponent }

  //I keep the new line
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    IvyCarouselModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
