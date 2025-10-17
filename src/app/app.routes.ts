import { Routes } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { OurTeacherComponent } from './pages/our-teacher/our-teacher.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { StudentComponent } from './dashboard/admin-dashboard/student/student.component';
import { AttendanceComponent } from './dashboard/admin-dashboard/attendance/attendance.component';
import { AssignmentComponent } from './dashboard/admin-dashboard/assignment/assignment.component';
import { MessageComponent } from './dashboard/admin-dashboard/message/message.component';
import { ReportComponent } from './dashboard/admin-dashboard/report/report.component';
import { StudentDashboardComponent } from './dashboard/student-dashboard/student-dashboard.component';
import { ChatboatComponent } from './pages/chatboat/chatboat.component';
import { FooterComponent } from './pages/footer/footer.component';
import { MyCourseComponent } from './pages/my-course/my-course.component';
import { AdminHomeComponent } from './dashboard/admin-dashboard/admin-home/admin-home.component';
import { CoursesComponent } from './dashboard/admin-dashboard/courses/courses.component';
import { ParentDashboardComponent } from './dashboard/parent-dashboard/parent-dashboard.component';

export const routes: Routes = [
  // Home
  { path: '', component: HomeComponent, title: 'Home | Digital Classroom' },

  // Login
  { path: 'login', component: LoginComponent },

  // Dashboard routes
  { path: 'student_dashboard', component: StudentDashboardComponent },


  {
    path: 'admin',
    component: AdminDashboardComponent,
    children: [
      { path: '', redirectTo: 'main-content', pathMatch: 'full' },
      { path: 'main-content', component: AdminHomeComponent },
      { path: 'course', component: CoursesComponent },
      { path: 'students', component: StudentComponent },
      { path: 'attendance', component: AttendanceComponent },
      { path: 'assignments', component: AssignmentComponent },
      { path: 'messages', component: MessageComponent },
      { path: 'reports', component: ReportComponent },
    ],
  },


  { path: 'dashboard/teacher', component: OurTeacherComponent },
  { path: 'dashboard/parent', component: ParentDashboardComponent },

  // Pages
  { path: 'pages/chatboat', component: ChatboatComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'our_teacher', component: OurTeacherComponent },
  { path: 'course', component: MyCourseComponent },
  // Fallback route
  { path: '**', redirectTo: '' },
];
