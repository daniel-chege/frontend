import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from "./components/footer/footer.component";
import { LoginComponent } from './components/log-in/log-in.component';
import { BookingsComponent } from './components/booking/booking.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { ToursComponent } from './components/tours/tours.component';
import { HomeComponent } from './components/home/home.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent, LoginComponent,BookingsComponent, HotelsComponent, ToursComponent, HomeComponent]
})
export class AppComponent {
  title = 'Tours';
}
