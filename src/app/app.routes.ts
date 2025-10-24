import { Routes } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { OurTeacherComponent } from './pages/our-teacher/our-teacher.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { StudentComponent } from './dashboard/admin-dashboard/student/student.component';
import { AttendanceComponent } from './dashboard/admin-dashboard/attendance/attendance.component';
import { AttendanceComponent as TeacherAttendanceComponent } from './dashboard/teacher-dashboard/attendance/attendance.component';
import { MessageComponent } from './dashboard/admin-dashboard/message/message.component';
import { ReportComponent } from './dashboard/admin-dashboard/report/report.component';
import { StudentDashboardComponent } from './dashboard/student-dashboard/student-dashboard.component';
import { ChatboatComponent } from './pages/chatboat/chatboat.component';
import { FooterComponent } from './pages/footer/footer.component';


import { ProgramsComponent } from './pages/programs/programs.component';
import { SyllabusComponent } from './pages/syllabus/syllabus.component';

import { AdminHomeComponent } from './dashboard/admin-dashboard/admin-home/admin-home.component';
import { ParentDashboardComponent } from './dashboard/parent-dashboard/parent-dashboard.component';
import { StudentHomeComponent } from './dashboard/student-dashboard/student-home/student-home.component';
import { StudentAccessbookComponent } from './dashboard/student-dashboard/student-accessbook/student-accessbook.component';
import { StudentAttendanceComponent } from './dashboard/student-dashboard/student-attendance/student-attendance.component';
import { StudentGradesComponent } from './dashboard/student-dashboard/student-grades/student-grades.component';
import { StudentMyCourseComponent } from './dashboard/student-dashboard/student-my-course/student-my-course.component';
import { StudentSttendLiveclassesComponent } from './dashboard/student-dashboard/student-sttend-liveclasses/student-sttend-liveclasses.component';
import { StudentSubmitassignmentComponent } from './dashboard/student-dashboard/student-submitassignment/student-submitassignment.component';
import { RegisterComponent } from './register/register.component';

import { AttendenceComponent } from './dashboard/parent-dashboard/attendence/attendence.component';
import { FeeRemindersComponent } from './dashboard/parent-dashboard/fee-reminders/fee-reminders.component';
import { LearningProgressComponent } from './dashboard/parent-dashboard/learning-progress/learning-progress.component';
import { SchoolCircularsComponent } from './dashboard/parent-dashboard/school-circulars/school-circulars.component';
import { ParentHomeComponent } from './dashboard/parent-dashboard/parent-home/parent-home.component';
import { CourseManagementComponent } from './dashboard/admin-dashboard/course-management/course-management.component';
import { SubjectManagementComponent } from './dashboard/admin-dashboard/subject-management/subject-management.component';
import { TeacherDashboardComponent } from './dashboard/teacher-dashboard/teacher-dashboard.component';
import { AnnouncementsComponent } from './dashboard/teacher-dashboard/announcements/announcements.component';
import { CheckAssignmentComponent } from './dashboard/teacher-dashboard/check-assignment/check-assignment.component';
import { CreateAssignmentComponent } from './dashboard/teacher-dashboard/create-assignment/create-assignment.component';
import { ManageStudentComponent } from './dashboard/teacher-dashboard/manage-student/manage-student.component';
import { StudentProgressComponent } from './dashboard/teacher-dashboard/student-progress/student-progress.component';
import { TeacherHomeComponent } from './dashboard/teacher-dashboard/teacher-home/teacher-home.component';
import { TeacherManagementComponent } from './dashboard/admin-dashboard/teacher-management/teacher-management.component';
import { StudentManagementComponent } from './dashboard/admin-dashboard/student-management/student-management.component';
import { ParentManagementComponent } from './dashboard/admin-dashboard/parent-management/parent-management.component';
import { TestimonialsComponent } from './pages/home/testimonials/testimonials.component';

export const routes: Routes = [
  // Home
  { path: '', component: HomeComponent, title: 'Home | Digital Classroom' },

  // Login
  { path: 'login', component: LoginComponent },
  { path: 'register', component:RegisterComponent },
  

  {
    path: 'admin',
    component: AdminDashboardComponent,
    children: [
      { path: '', redirectTo: 'main-content', pathMatch: 'full' },
      { path: 'main-content', component: AdminHomeComponent },
      { path: 'course-management', component: CourseManagementComponent },
      { path: 'students', component: StudentComponent },
      { path: 'attendance', component: AttendanceComponent },
      { path: 'subject-management', component: SubjectManagementComponent},
      { path: 'messages', component: MessageComponent },
      { path: 'reports', component: ReportComponent },
      {path: 'teacher-management',component: TeacherManagementComponent},
      {path:'student-management',component: StudentManagementComponent},
      {path:'parent-management',component:ParentManagementComponent},
    ],
  },
 {
    path: 'student',
    component: StudentDashboardComponent,
    children: [
      { path: '', redirectTo: 'main-content-student', pathMatch: 'full' },
      { path: 'main-content-student', component: StudentHomeComponent },
      { path: 'accessbook', component: StudentAccessbookComponent },
      { path: 'attendance', component: StudentAttendanceComponent },
      { path: 'grades', component: StudentGradesComponent},
      { path: 'my-course', component: StudentMyCourseComponent },
      { path: 'liveclasses', component: StudentSttendLiveclassesComponent },
      { path: 'assignment', component: StudentSubmitassignmentComponent },
    ],
  },
{
    path: 'parent',
    component: ParentDashboardComponent,
    children: [
      { path: '', redirectTo: 'main-content-parent', pathMatch: 'full' },
      { path: 'main-content-parent', component: ParentHomeComponent },
      { path: 'attendence', component: AttendenceComponent },
      { path: 'fee-reminders', component:FeeRemindersComponent },
      { path: 'learning-progress', component: LearningProgressComponent},
      { path: 'school-circulars', component: SchoolCircularsComponent},
     
    ],
  },

  {
    path: 'teacher',
    component: TeacherDashboardComponent,
    children: [
      { path: '', redirectTo: 'main-content-teacher', pathMatch: 'full' },
      { path: 'main-content-teacher', component: TeacherHomeComponent },
      { path: 'announcement', component: AnnouncementsComponent},
      { path: 'attendance', component: TeacherAttendanceComponent },
      { path: 'check-assignment', component: CheckAssignmentComponent},
      { path: 'create-assignment', component: CreateAssignmentComponent},
     { path: 'manage-student', component: ManageStudentComponent},
     { path: 'student-progress', component: StudentProgressComponent},
    ],
  },
  { path: 'dashboard/teacher', component: OurTeacherComponent },
  { path: 'dashboard/parent', component: ParentDashboardComponent },

  // Pages
  { path: 'pages/chatboat', component: ChatboatComponent },
  { path: 'home/footer', component: FooterComponent },
  { path: 'home/navbar', component: NavbarComponent },
  { path: 'home/our_teacher', component: OurTeacherComponent },
 
  { path: 'footer', component: FooterComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'our_teacher', component: OurTeacherComponent },
  
  { path: 'programs', component: ProgramsComponent},
  { path: 'syllabus', component: SyllabusComponent},
  {path:'testimonials',component:TestimonialsComponent},

  // Fallback route
  { path: '**', redirectTo: '' },
];
