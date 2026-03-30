import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Home', route: '/' },
    { label: 'Services', route: '/services' },
    { label: 'Pricing', route: '/pricing' },
    { label: 'About', route: '/about' }
  ];

  resources = [
    { label: 'Free Downloads', route: '/resources/downloads' },
    { label: 'Stress Manual', route: '/resources/manual' },
    { label: 'Hiring Guide', route: '/resources/guide' },
    { label: 'Brochures', route: '/resources/brochures' }
  ];

  contactInfo = {
    company: 'SomaHire LLC',
    tagline: 'SMARTER HIRING STRONGER TEAMS',
    description: 'Our mission is to provide companies with smarter hiring solutions and stronger teams through innovative assessment tools and comprehensive hiring guidance.',
    address: '123 Business Avenue, Atlanta, GA 30303',
    phone: '404-369-3414',
    email: 'info@somahire.com'
  };
}
