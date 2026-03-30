import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  navLinks = [
    { label: 'Home', route: '/' },
    { label: 'Services', route: '/services' },
    { label: 'Pricing', route: '/pricing' },
    { label: 'About', route: '/about' },
    { label: 'Resources', route: '/resources' },
    { label: 'Contact', route: '/contact' }
  ];

  contactInfo = {
    phone: '404-369-3414',
    email: 'info@somahire.com',
    hours: 'Mon - Fri 9:00 AM - 5:00 PM'
  };

  loginRoute = '/login';
  registerRoute = '/register';
}
