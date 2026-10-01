import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-apply-now',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './apply-now.component.html',
  styleUrl: './apply-now.component.scss'
})
export class ApplyNowComponent {

  name = '';
  email = '';
  phone = '';
  qualification = '';
  experience = '';
  resume = '';

  constructor(private router: Router) { }

  submitApplication() {

    if (
      !this.name ||
      !this.email ||
      !this.phone ||
      !this.qualification
    ) {
      alert('Please fill all required fields.');
      return;
    }

    const application = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      qualification: this.qualification,
      experience: this.experience,
      resume: this.resume
    };

    localStorage.setItem(
      'jobApplication',
      JSON.stringify(application)
    );

    alert('Application submitted successfully!');

    this.router.navigate(['/jobs']);
  }
}