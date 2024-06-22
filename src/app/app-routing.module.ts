import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';
import { LoginComponent } from './public/pages/login/login.component';
import { RegisterComponent } from './public/pages/register/register.component';
import { PetsComponent } from './private/pages/pets/pets.component';
import { BookingsComponent } from './private/pages/bookings/bookings.component';
import { OurServicesComponent } from './private/pages/our-services/our-services.component';
import { AboutUsComponent } from './private/about-us/about-us.component';
import { ContactUsComponent } from './private/pages/contact-us/contact-us.component';
import { NewBookingComponent } from './private/pages/bookings/new-booking/new-booking.component';
import { UpdateBookingComponent } from './private/pages/bookings/update-booking/update-booking.component';
import { NewPetComponent } from './private/pages/pets/new-pet/new-pet.component';
import { UpdatePetComponent } from './private/pages/pets/update-pet/update-pet.component';

const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"login",component: LoginComponent},
  {path:"register", component: RegisterComponent},
  {path:"dashboard/pets", component: PetsComponent},
  {path:"dashboard/bookings", component: BookingsComponent},
  {path:"dashboard/new-booking", component: NewBookingComponent },
  {path:"dashboard/update-booking", component: UpdateBookingComponent },
  {path:"dashboard/our-services", component: OurServicesComponent},
  {path:"dashboard/register-pets", component: PetsComponent },
  {path:"dashboard/new-pet", component: NewPetComponent },
  {path:"dashboard/update-pet", component: UpdatePetComponent },
  {path:"dashboard/about-us", component: AboutUsComponent},
  {path:"dashboard/cotact-us", component: ContactUsComponent},
  {path:"**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
