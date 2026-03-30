import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  formData = {
    fullName: '',
    phone: '',
    email: '',
    company: '',
    message: '',
  };

  onSubmit() {
    // Form submission logic
    console.log('Form submitted:', this.formData);
    // Reset form after submission
    this.formData = {
      fullName: '',
      phone: '',
      email: '',
      company: '',
      message: '',
    };
  }
}
