import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JobCardComponent } from './job-card/job-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [JobCardComponent, CommonModule, FormsModule, HeaderComponent, FooterComponent
],

  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent {

  jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Google',
      location: 'Bangalore',
      salary: '₹6 - ₹10 LPA',
      type: 'Full Time'
    },
    {
      id: 2,
      title: 'Angular Developer',
      company: 'Microsoft',
      location: 'Hyderabad',
      salary: '₹7 - ₹12 LPA',
      type: 'Full Time'
    },
    {
      id: 3,
      title: 'Web Developer',
      company: 'Infosys',
      location: 'Pune',
      salary: '₹4 - ₹7 LPA',
      type: 'Full Time'
    }
  ];

  constructor(private router: Router) {}

  openJob(id: number) {
    this.router.navigate(['/view-details', id]);
  }

}