import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone:true,
  templateUrl: './signup.component.html',
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  authService: any;

  constructor(private fb: FormBuilder, private AuthService: AuthService, private router: Router) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      isAdmin: [false, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      const { username, password, isAdmin } = this.signupForm.value;
      this.authService.signup(username, password, isAdmin).subscribe((user: { isAdmin: any; }) => {
        this.router.navigate([user.isAdmin ? '/admin-tours' : '/tours']);
      });
    }
  }
}
