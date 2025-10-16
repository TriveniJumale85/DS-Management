import { Routes } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { OurTeacherComponent } from './our-teacher/our-teacher.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
     { path: '', component: HomeComponent, title: 'Home | Digital Classroom' },
      { path: 'navbar', component: NavbarComponent},
       { path: 'student_dashboard', component: StudentDashboardComponent},
        { path: 'our_teacher', component: OurTeacherComponent},
        { path: '**', redirectTo: '' }
];
