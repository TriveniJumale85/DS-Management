import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { OurTeacherComponent } from "../our-teacher/our-teacher.component";
import { FooterComponent } from "../footer/footer.component";
import { ChatboatComponent } from "../chatboat/chatboat.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, OurTeacherComponent, FooterComponent, ChatboatComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
