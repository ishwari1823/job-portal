
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.scss'
})
export class JobCardComponent {

  @Input() job!: {
    id: number;
    title: string;
    company: string;
    location: string;
    salary: string;
    type: string;
  };

  // View Details
  @Output() viewJob = new EventEmitter<number>();

  // Edit Job
  @Output() editJob = new EventEmitter<any>();

  // Delete Job
  @Output() deleteJob = new EventEmitter<number>();


  onViewDetails(): void {
    this.viewJob.emit(this.job.id);
  }


  onEdit(): void {
    this.editJob.emit(this.job);
  }


  onDelete(): void {
    this.deleteJob.emit(this.job.id);
  }

}

