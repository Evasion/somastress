import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

export interface User {
  id: string;
  fullName: string;
  email: string;
  gender: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  fullName: string;
  email: string;
  password: string;
  gender: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: User;
  token?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly apiUrl = 'http://localhost:5000/api/auth';
  readonly isAuthenticated = signal(false);
  readonly currentUser = signal<User | null>(null);
  readonly isLoading = signal(false);
  readonly error = signal<string | null>(null);

  constructor(private router: Router) {
    const token = typeof window !== 'undefined' ? localStorage.getItem('soma_token') : null;
    if (token) {
      this.isAuthenticated.set(true);
      const savedUser = localStorage.getItem('soma_user');
      if (savedUser) {
        this.currentUser.set(JSON.parse(savedUser));
      }
    }
  }

  async login(credentials: LoginRequest): Promise<AuthResponse> {
    this.isLoading.set(true);
    this.error.set(null);

    try {
      const response = await fetch(`${this.apiUrl}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      const data: AuthResponse = await response.json();

      if (data.success && data.token && data.user) {
        localStorage.setItem('soma_token', data.token);
        localStorage.setItem('soma_user', JSON.stringify(data.user));
        this.isAuthenticated.set(true);
        this.currentUser.set(data.user);
        this.router.navigate(['/']);
      } else {
        this.error.set(data.message || 'Login failed');
      }

      return data;
    } catch (err) {
      const message = 'Unable to connect to server. Please try again.';
      this.error.set(message);
      return { success: false, message };
    } finally {
      this.isLoading.set(false);
    }
  }

  async register(data: RegisterRequest): Promise<AuthResponse> {
    this.isLoading.set(true);
    this.error.set(null);

    try {
      const response = await fetch(`${this.apiUrl}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result: AuthResponse = await response.json();

      if (result.success && result.token && result.user) {
        localStorage.setItem('soma_token', result.token);
        localStorage.setItem('soma_user', JSON.stringify(result.user));
        this.isAuthenticated.set(true);
        this.currentUser.set(result.user);
        this.router.navigate(['/']);
      } else {
        this.error.set(result.message || 'Registration failed');
      }

      return result;
    } catch (err) {
      const message = 'Unable to connect to server. Please try again.';
      this.error.set(message);
      return { success: false, message };
    } finally {
      this.isLoading.set(false);
    }
  }

  logout(): void {
    localStorage.removeItem('soma_token');
    localStorage.removeItem('soma_user');
    this.isAuthenticated.set(false);
    this.currentUser.set(null);
    this.router.navigate(['/login']);
  }
}
