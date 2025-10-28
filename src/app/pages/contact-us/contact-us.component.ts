import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    alert('Thank you for reaching out, ' + this.contact.name + '! We will get back to you soon.');
    this.contact = { name: '', email: '', message: '' };
  }
}
