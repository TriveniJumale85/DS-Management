import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Student {
  id: number;
  name: string;
  email: string;
  grade: string;
  enrollmentDate: string;
}

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  
  students: Student[] = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      grade: '10th Grade',
      enrollmentDate: '2023-09-01'
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob.smith@example.com',
      grade: '9th Grade',
      enrollmentDate: '2023-09-01'
    },
    {
      id: 3,
      name: 'Charlie Brown',
      email: 'charlie.brown@example.com',
      grade: '11th Grade',
      enrollmentDate: '2023-09-01'
    },
    {
      id: 4,
      name: 'Diana Wilson',
      email: 'diana.wilson@example.com',
      grade: '12th Grade',
      enrollmentDate: '2023-09-01'
    }
  ];
}
