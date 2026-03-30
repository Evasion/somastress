import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = signal('');
  password = signal('');
  rememberMe = signal(false);
  showPassword = signal(false);

  constructor(protected auth: AuthService) {}

  async onSubmit(event: Event) {
    event.preventDefault();

    if (!this.email() || !this.password()) {
      this.auth.error.set('Please enter your email and password.');
      return;
    }

    await this.auth.login({
      email: this.email(),
      password: this.password(),
    });
  }

  togglePassword() {
    this.showPassword.update(v => !v);
  }

  onGoogleLogin() {
    // Placeholder for Google OAuth
    window.location.href = 'http://localhost:5000/api/auth/google';
  }
}
