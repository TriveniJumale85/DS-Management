import { Routes } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';

import { OurTeacherComponent } from './pages/our-teacher/our-teacher.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './dashboard/student-dashboard/student-dashboard.component';

export const routes: Routes = [
     { path: '', component: HomeComponent, title: 'Home | Digital Classroom' },
      { path: 'navbar', component: NavbarComponent},
       { path: 'student_dashboard', component: StudentDashboardComponent},
        { path: 'our_teacher', component: OurTeacherComponent},
        { path: 'login', component: LoginComponent},
        { path: 'admin', component: AdminDashboardComponent},
        { path: '**', redirectTo: '' }
];



