import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Course {
  id: number;
  name: string;
  description: string;
  teacher: string;
  duration: string;
}

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courses: Course[] = [
    {
      id: 1,
      name: 'Mathematics',
      description: 'Advanced algebra and calculus',
      teacher: 'Dr. Smith',
      duration: '6 months'
    },
    {
      id: 2,
      name: 'Physics',
      description: 'Mechanics and thermodynamics',
      teacher: 'Prof. Johnson',
      duration: '4 months'
    },
    {
      id: 3,
      name: 'Chemistry',
      description: 'Organic and inorganic chemistry',
      teacher: 'Dr. Brown',
      duration: '5 months'
    },
    {
      id: 4,
      name: 'Computer Science',
      description: 'Programming fundamentals',
      teacher: 'Ms. Davis',
      duration: '3 months'
    }
  ];
}
