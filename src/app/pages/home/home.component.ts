import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { OurTeacherComponent } from "../../our-teacher/our-teacher.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, OurTeacherComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
