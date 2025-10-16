import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
 email = '';
  password = '';
  @Output() loginSuccess = new EventEmitter<{email: string, password: string}>();

  onSubmit() {
    this.loginSuccess.emit({ email: this.email, password: this.password });
  }
}


