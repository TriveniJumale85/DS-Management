import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Course {
  id?: number;
  name: string;
  category: string;
  duration: string;
  students: number;
  progress: number;
}

@Component({
  selector: 'app-course-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.css']
})
export class CourseManagementComponent {
  // Course List
  courses: Course[] = [
    { id: 1, name: 'Mathematics', category: 'Academic', duration: '6 Months', students: 120, progress: 85 },
    { id: 2, name: 'Science', category: 'Academic', duration: '5 Months', students: 98, progress: 70 },
    { id: 3, name: 'Sports Training', category: 'Sports', duration: '3 Months', students: 76, progress: 50 }
  ];

  // New or Editing Course
  newCourse: Course = { name: '', category: '', duration: '', students: 0, progress: 0 };

  // Control modal state
  showCourseModal = false;

  // Edit mode flag
  isEditMode = false;

  // Selected index for edit
  selectedIndex: number | null = null;

  // ✅ Open modal for adding a new course
  openAddCourseModal() {
    this.isEditMode = false;
    this.resetForm();
    this.showCourseModal = true;
  }

  // ✅ Open modal for editing an existing course
  openEditCourseModal(course: Course, index: number) {
    this.isEditMode = true;
    this.selectedIndex = index;
    this.newCourse = { ...course };
    this.showCourseModal = true;
  }

  // ✅ Close modal
  closeCourseModal() {
    this.showCourseModal = false;
    this.resetForm();
  }

  // ✅ Add or Update Course
  saveCourse() {
    if (this.newCourse.name.trim() === '') return;

    if (this.isEditMode && this.selectedIndex !== null) {
      // Update course
      this.courses[this.selectedIndex] = { ...this.newCourse };
    } else {
      // Add new course
      this.newCourse.id = this.courses.length + 1;
      this.courses.push({ ...this.newCourse });
    }

    this.closeCourseModal();
  }

  // ✅ Delete Course
  deleteCourse(index: number) {
    if (confirm('Are you sure you want to delete this course?')) {
      this.courses.splice(index, 1);
    }
  }

  // ✅ Reset form
  resetForm() {
    this.newCourse = { name: '', category: '', duration: '', students: 0, progress: 0 };
    this.selectedIndex = null;
  }
}
