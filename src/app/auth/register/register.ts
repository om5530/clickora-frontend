import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common';
import { first, firstValueFrom } from 'rxjs';
import { AuthService } from '../../../swagger';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ButtonModule, FormsModule, ReactiveFormsModule, RouterModule, InputTextModule, PasswordModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
  registerForm: FormGroup;
  errorMessage: String = '';

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      salutation: ['', [Validators.required]],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]

    });
  }

  passwordMatchValidator(frm: FormGroup) {
    return frm.controls['password'].value === frm.controls['confirmPassword'].value ? null : {'mismatch': true};
  }

  onSubmit(): void {

    if(this.registerForm.get('password')?.value !== this.registerForm.get('confirmPassword')?.value) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    if (this.registerForm.valid) {
      const { name, email, password, confirmPassword } = this.registerForm.value;
    }
    console.log(this.registerForm.value);
    firstValueFrom(this.authService.registerUser(this.registerForm.value)).then((user) => {
      console.log('Registration successful:', user);
      this.router.navigate(['/login']);
    }).catch((error) => {
      console.error('Registration failed:', error);
      this.errorMessage = 'Registration failed. Please try again.';
    })
  }

}
