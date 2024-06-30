import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookingService } from '../../services/booking.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-bookings',
  standalone: true,
  templateUrl: './booking.component.html',
  imports: [ReactiveFormsModule, CommonModule],
  styleUrls: ['./booking.component.css']
})
export class BookingsComponent implements OnInit {
  bookingForm!: FormGroup;

  constructor(private fb: FormBuilder, private bookingService: BookingService) {}

  ngOnInit() {
    this.bookingForm = this.fb.group({
      bookingName: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      this.bookingService.createBooking(this.bookingForm.value).subscribe(response => {
        console.log('Booking created:', response);
      });
    }
    if (this.bookingForm.valid) {
      this.bookingService.deleteBooking(this.bookingForm.value).subscribe(response => {
        console.log('Booking deleted:', response);
      });
    }
    // if (this.bookingForm.valid) {
    //   this.bookingService.updateBooking(this.bookingForm.value).subscribe(response => {
    //     console.log('Booking updated:', response);
    //   });
    // }
    if (this.bookingForm.valid) {
      this.bookingService.getBookingById(this.bookingForm.value).subscribe(response => {
        console.log('Booking :', response);
      });
    }
    // if (this.bookingForm.valid) {
    //   this.bookingService.getBookings(this.bookingForm.value).subscribe(response => {
    //     console.log('Bookings created:', response);
    //   });
    // }
  }
}
