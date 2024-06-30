import { HotelsComponent } from './components/hotels/hotels.component';
import { BookingsComponent } from './components/booking/booking.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/log-in/log-in.component';
import { SignupComponent } from './components/signup/signup.component';
import { ToursComponent } from './components/tours/tours.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'LogIn', component:LoginComponent},
    {path:'Tours', component:ToursComponent},
    {path:'signUp', component:SignupComponent},
    {path:'Booking', component:BookingsComponent},
    {path:'Hotels', component:HotelsComponent}
];
