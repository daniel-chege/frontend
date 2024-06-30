import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-log-in',
  standalone:true,
  templateUrl: './log-in.component.html',
  imports: [CommonModule, ReactiveFormsModule],
  styleUrls: ['./log-in.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe(user => {
        if (user) {
          this.router.navigate([user.isAdmin ? '/admin-tours' : '/tours']);
        } else {
          alert('Invalid credentials');
        }
      });
    }
  }
}
