import { Routes } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';

import { OurTeacherComponent } from './pages/our-teacher/our-teacher.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './dashboard/student-dashboard/student-dashboard.component';
import { ChatboatComponent } from './pages/chatboat/chatboat.component';
import { FooterComponent } from './pages/footer/footer.component';
import { MyCourseComponent } from './pages/student-my-course/my-course.component';
import { AdminAssignmentComponent } from './pages/admin-assignment/admin-assignment.component';
import { AdminAttendanceComponent } from './pages/admin-attendance/admin-attendance.component';
import { AdminCoursesComponent } from './pages/admin-courses/admin-courses.component';
import { AdminReportComponent } from './pages/admin-report/admin-report.component';
import { AdminStudentComponent } from './pages/admin-student/admin-student.component';
import { StudentAccessbookComponent } from './pages/student-accessbook/student-accessbook.component';
import { StudentAttendLiveclassesComponent } from './pages/student-attend-liveclasses/student-attend-liveclasses.component';
import { StudentAttendanceComponent } from './pages/student-attendance/student-attendance.component';
import { StudentGradesComponent } from './pages/student-grades/student-grades.component';

export const routes: Routes = [
  // Home
  { path: '', component: HomeComponent, title: 'Home | Digital Classroom' },

  // Login
  { path: 'login', component: LoginComponent },

  // Dashboard routes
  { path: 'student_dashboard', component: StudentDashboardComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'dashboard/teacher', component: OurTeacherComponent },

  // Pages
  { path: 'pages/chatboat', component: ChatboatComponent },
  { path: 'home/footer', component: FooterComponent },
  { path: 'home/navbar', component: NavbarComponent },
  { path: 'home/our_teacher', component: OurTeacherComponent },
  { path: 'admin/assignment', component: AdminAssignmentComponent },
  { path: 'admin/attendance', component: AdminAttendanceComponent },
  { path: 'admin/courses', component: AdminCoursesComponent },
  { path: 'admin/report', component: AdminReportComponent },
  { path: 'admin/student', component: AdminStudentComponent},
  { path: 'student/accessbook', component: StudentAccessbookComponent },
  { path: 'student/attend-liveclasses', component: StudentAttendLiveclassesComponent },
  { path: 'student/attendance', component: StudentAttendanceComponent },
  { path: 'student/grades', component: StudentGradesComponent},
  { path: 'student/submit-assignment', component: StudentAccessbookComponent },
  { path: 'student/course', component: MyCourseComponent },
  // Fallback route
  { path: '**', redirectTo: '' }
];


