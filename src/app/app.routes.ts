import { Routes } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';

import { OurTeacherComponent } from './pages/our-teacher/our-teacher.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './dashboard/student-dashboard/student-dashboard.component';
import { ChatboatComponent } from './pages/chatboat/chatboat.component';
import { FooterComponent } from './pages/footer/footer.component';

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
  { path: 'footer', component: FooterComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'our_teacher', component: OurTeacherComponent },

  // Fallback route
  { path: '**', redirectTo: '' }
];


