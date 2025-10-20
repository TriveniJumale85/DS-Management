import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css'
})
export class StudentDashboardComponent {

}
