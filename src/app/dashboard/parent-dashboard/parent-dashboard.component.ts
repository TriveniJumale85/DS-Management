import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-parent-dashboard',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './parent-dashboard.component.html',
  styleUrl: './parent-dashboard.component.css'
})
export class ParentDashboardComponent {

}
