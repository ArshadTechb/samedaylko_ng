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
import { TicketService } from './services/tickets.service';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { NextDirective } from './next.directive';
import { PrevDirective } from './prev.directive';
import { SlickCarouselModule } from 'ngx-slick-carousel';
// import { CarouselModule } from 'ngx-owl-carousel-o';





const myRoutes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "ticket", component: TicketComponent },
  { path: "privacypolicy", component:  PrivacyPolicyComponent},
  { path: "terms", component:  TermsConditionsComponent},
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
    TicketComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    NextDirective,
    PrevDirective,
    
    
  ],
  imports: [
 
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes,{enableTracing:true, useHash: false ,scrollPositionRestoration: 'enabled'}),
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    IvyCarouselModule,
    BrowserAnimationsModule,
    SlickCarouselModule
    // CarouselModule
   
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
