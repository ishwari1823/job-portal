import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './view-details.component.html',
  styleUrl: './view-details.component.scss'
})
export class ViewDetailsComponent {

  jobId: string = '';

  constructor(private route: ActivatedRoute) {
    this.jobId = this.route.snapshot.paramMap.get('id') || '';
  }
}