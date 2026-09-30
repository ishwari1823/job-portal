import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(private router: Router) {}

  signup() {

    if (
      !this.name ||
      !this.email ||
      !this.password ||
      !this.confirmPassword
    ) {
      alert('Please fill all fields.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    alert('Account created successfully!');

    this.router.navigate(['/login']);
  }

}