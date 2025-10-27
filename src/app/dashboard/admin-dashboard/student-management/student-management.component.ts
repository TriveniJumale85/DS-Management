import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.css']
})
export class StudentManagementComponent {
  students: any[] = [
    { id: 1, name: 'Aarav Mehta', course: 'B.Tech', email: 'aarav@gmail.com', contact: '9876543210', enrollmentDate: '2024-06-15', status: 'Active' },
  ];

  showForm = false;
  isEdit = false;
  message = '';
  studentData: any = { id: '', name: '', course: '', email: '', contact: '', enrollmentDate: '', status: 'Active' };

  toggleForm() {
    this.showForm = !this.showForm;
    this.isEdit = false;
    this.message = '';
    this.studentData = { id: '', name: '', course: '', email: '', contact: '', enrollmentDate: '', status: 'Active' };
  }

  saveStudent() {
  // Mobile number validation
  const mobileRegex = /^[0-9]{10}$/;
  if (!mobileRegex.test(this.studentData.contact)) {
    this.message = 'Please enter a valid 10-digit mobile number!';
    return;
  }

  if (this.isEdit) {
    const index = this.students.findIndex(s => s.id === this.studentData.id);
    if (index !== -1) this.students[index] = { ...this.studentData };
    this.message = 'Student details updated successfully!';
  } else {
    this.studentData.id = this.students.length + 1;
    this.students.push({ ...this.studentData });
    this.message = 'Student added successfully!';
  }
  this.toggleForm();
}


  editStudent(student: any) {
    this.studentData = { ...student };
    this.showForm = true;
    this.isEdit = true;
  }

  deleteStudent(id: number) {
    const confirmDelete = confirm('Are you sure you want to delete this student?');
    if (confirmDelete) {
      this.students = this.students.filter(s => s.id !== id);
      this.message = 'Student deleted successfully!';
    }
  }
  
}
