import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-management',
  standalone: true,
  templateUrl: './teacher-management.component.html',
  styleUrls: ['./teacher-management.component.css']
})
export class TeacherManagementComponent {
  teachers = [
    { name: 'Dr. Smith', subject: 'Mathematics', email: 'smith@school.com', experience: 10 },
    { name: 'Prof. Johnson', subject: 'Physics', email: 'johnson@school.com', experience: 8 },
    { name: 'Dr. Brown', subject: 'Chemistry', email: 'brown@school.com', experience: 12 },
    { name: 'Ms. Davis', subject: 'Computer Science', email: 'davis@school.com', experience: 6 },
  ];
}
