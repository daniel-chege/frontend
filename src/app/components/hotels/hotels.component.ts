import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HotelService } from '../../services/hotel.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-hotels',
  standalone: true,
  templateUrl: './hotels.component.html',
  imports: [ReactiveFormsModule, CommonModule],
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  hotelForm!: FormGroup;
  HotelForm: any;
  HotelService: any;

  constructor(private fb: FormBuilder, private hotelService: HotelService) {}

  ngOnInit() {
    this.hotelForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.hotelForm.valid) {
      this.hotelService.createHotel(this.hotelForm.value).subscribe(response => {
        console.log('Hotel created:', response);
      });
    }
    if (this.HotelForm.valid) {
      this.HotelService.deleteHotel(this.HotelForm.value).subscribe((response: any) => {
        console.log('Hotel created:', response);
      });
    }
    // if (this.HotelForm.valid) {
    //   this.HotelService.updateHotel(this.HotelForm.value).subscribe(response => {
    //     console.log('Hotel created:', response);
    //   });
    // }
    if (this.HotelForm.valid) {
      this.HotelService.getHotelById(this.HotelForm.value).subscribe((response: any) => {
        console.log('Hotel created:', response);
      });
    }
    // if (this.HotelForm.valid) {
    //   this.HotelService.getHotels(this.HotelForm.value).subscribe(response => {
    //     console.log('Hotel created:', response);
    //   });
    // }
  }
}
