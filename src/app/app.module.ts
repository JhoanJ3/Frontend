import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { PetsComponent } from './private/pages/pets/pets.component';
import { OurServicesComponent } from './private/pages/our-services/our-services.component';
import { BookingsComponent } from './private/pages/bookings/bookings.component';
import { HomeComponent } from './public/pages/home/home.component';
import { LoginComponent } from './public/pages/login/login.component';
import { RegisterComponent } from './public/pages/register/register.component';
import { AboutUsComponent } from './private/about-us/about-us.component';
import { ContactUsComponent } from './private/pages/contact-us/contact-us.component';
import { NewBookingComponent } from './private/pages/bookings/new-booking/new-booking.component';
import { UpdateBookingComponent } from './private/pages/bookings/update-booking/update-booking.component';
import { NewPetComponent } from './private/pages/pets/new-pet/new-pet.component';
import { UpdatePetComponent } from './private/pages/pets/update-pet/update-pet.component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PetsComponent,
    OurServicesComponent,
    BookingsComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutUsComponent,
    ContactUsComponent,
    NewBookingComponent,
    UpdateBookingComponent,
    NewPetComponent,
    UpdatePetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
