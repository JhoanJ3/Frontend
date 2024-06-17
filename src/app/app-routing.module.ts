import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';
import { LoginComponent } from './public/pages/login/login.component';
import { RegisterComponent } from './public/pages/register/register.component';
import { PetsComponent } from './private/pages/pets/pets.component';
import { BookingsComponent } from './private/pages/bookings/bookings.component';
import { OurServicesComponent } from './private/pages/our-services/our-services.component';

const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"login",component: LoginComponent},
  {path:"register", component: RegisterComponent},
  {path:"dashboard/pets", component: PetsComponent},
  {path:"dashboard/bookings", component: BookingsComponent},
  {path:"dashboard/our-services", component: OurServicesComponent},
  {path:"**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
