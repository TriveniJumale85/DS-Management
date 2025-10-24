import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-management',
  standalone: true,
  imports: [CommonModule],   // ✅ add this line
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.css']
})
export class StudentManagementComponent {
  students = [
    {
      name: 'Alice Johnson',
      course: 'Mathematics',
      email: 'alice@school.com',
      contact: '9876543210',
      enrollmentDate: '2024-01-10',
      status: 'Active'
    },
    {
      name: 'Bob Smith',
      course: 'Physics',
      email: 'bob@school.com',
      contact: '8765432109',
      enrollmentDate: '2024-01-15',
      status: 'Active'
    },
    {
      name: 'Charlie Brown',
      course: 'Chemistry',
      email: 'charlie@school.com',
      contact: '7654321098',
      enrollmentDate: '2024-02-01',
      status: 'Inactive'
    },
    {
      name: 'Diana Wilson',
      course: 'Computer Science',
      email: 'diana@school.com',
      contact: '6543210987',
      enrollmentDate: '2024-02-20',
      status: 'Active'
    }
  ];
}
