import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Assignment {
  id: number;
  title: string;
  course: string;
  teacher: string;
  dueDate: string;
  status: 'Active' | 'Completed' | 'Overdue';
  submissions: number;
  totalStudents: number;
}

@Component({
  selector: 'app-assignment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.css'
})
export class AssignmentComponent {
  assignments: Assignment[] = [
    {
      id: 1,
      title: 'Algebra Homework',
      course: 'Mathematics',
      teacher: 'Dr. Smith',
      dueDate: '2024-01-20',
      status: 'Active',
      submissions: 28,
      totalStudents: 30
    },
    {
      id: 2,
      title: 'Physics Lab Report',
      course: 'Physics',
      teacher: 'Prof. Johnson',
      dueDate: '2024-01-18',
      status: 'Completed',
      submissions: 25,
      totalStudents: 25
    },
    {
      id: 3,
      title: 'Chemistry Experiment',
      course: 'Chemistry',
      teacher: 'Dr. Brown',
      dueDate: '2024-01-15',
      status: 'Overdue',
      submissions: 22,
      totalStudents: 28
    },
    {
      id: 4,
      title: 'Programming Project',
      course: 'Computer Science',
      teacher: 'Ms. Davis',
      dueDate: '2024-01-25',
      status: 'Active',
      submissions: 15,
      totalStudents: 30
    }
  ];

  getStatusClass(status: string): string {
    switch (status) {
      case 'Active':
        return 'text-primary';
      case 'Completed':
        return 'text-success';
      case 'Overdue':
        return 'text-danger';
      default:
        return '';
    }
  }

  getSubmissionPercentage(submissions: number, total: number): number {
    return Math.round((submissions / total) * 100);
  }
}
