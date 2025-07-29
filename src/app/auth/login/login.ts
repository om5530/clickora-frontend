import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../swagger';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',     
  standalone: true,
  imports: [ButtonModule, FormsModule, RouterModule, ReactiveFormsModule, InputTextModule, PasswordModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})

export class Login {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
    }
    firstValueFrom(this.authService.loginUser({ email: this.loginForm.value.email, password: this.loginForm.value.password }))
      .then((user) => {
        this.router.navigate(['/customer']);
        console.log('Login successful:', user);
        this.router.navigate(['/customer']);
      }
      )
      .catch((error) => {
        console.error('Login failed:', error);
        this.errorMessage = 'Login failed. Please check your credentials.';
      });
  }

}
