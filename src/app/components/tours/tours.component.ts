import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TourService } from '../../services/tour.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-tours',
  standalone: true,
  templateUrl: './tours.component.html',
  imports: [ReactiveFormsModule, CommonModule],
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {
  tourForm!: FormGroup;

  constructor(private fb: FormBuilder, private tourService: TourService) {}

  ngOnInit() {
    this.tourForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }

  onSubmit() {
    if (this.tourForm.valid) {
      this.tourService.createTour(this.tourForm.value).subscribe(response => {
        console.log('Tour created:', response);
      });
    }
    if (this.tourForm.valid) {
      this.tourService.deleteTour(this.tourForm.value).subscribe((response: any) => {
        console.log('tour created:', response);
      });
    }
    // if (this.tourForm.valid) {
    //   this.tourService.updatetour(this.tourForm.value).subscribe(response => {
    //     console.log('tour created:', response);
    //   });
    // }
    if (this.tourForm.valid) {
      this.tourService.getTourById(this.tourForm.value).subscribe((response: any) => {
        console.log('tour created:', response);
      });
    }
    // if (this.tourForm.valid) {
    //   this.tourService.gettours(this.tourForm.value).subscribe(response => {
    //     console.log('tour created:', response);
    //   });
    // }
  }
}
