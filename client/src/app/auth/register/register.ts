import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  fullName = signal('');
  email = signal('');
  password = signal('');
  confirmPassword = signal('');
  gender = signal('');
  showPassword = signal(false);

  constructor(protected auth: AuthService) {}

  async onSubmit(event: Event) {
    event.preventDefault();

    if (!this.fullName() || !this.email() || !this.password() || !this.confirmPassword() || !this.gender()) {
      this.auth.error.set('Please fill in all fields.');
      return;
    }

    if (this.password() !== this.confirmPassword()) {
      this.auth.error.set('Passwords do not match.');
      return;
    }

    if (this.password().length < 6) {
      this.auth.error.set('Password must be at least 6 characters.');
      return;
    }

    await this.auth.register({
      fullName: this.fullName(),
      email: this.email(),
      password: this.password(),
      gender: this.gender(),
    });
  }

  selectGender(g: string) {
    this.gender.set(g);
  }

  togglePassword() {
    this.showPassword.update(v => !v);
  }

  onGoogleRegister() {
    window.location.href = 'http://localhost:5000/api/auth/google';
  }
}
