import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ReportData {
  totalStudents: number;
  totalCourses: number;
  totalAssignments: number;
  averageAttendance: number;
  totalMessages: number;
}

interface ChartData {
  labels: string[];
  data: number[];
  colors: string[];
}

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {
  reportData: ReportData = {
    totalStudents: 150,
    totalCourses: 12,
    totalAssignments: 45,
    averageAttendance: 87.5,
    totalMessages: 28
  };

  attendanceChart: ChartData = {
    labels: ['Present', 'Absent', 'Late'],
    data: [87.5, 8.2, 4.3],
    colors: ['#198754', '#dc3545', '#ffc107']
  };

  courseEnrollmentChart: ChartData = {
    labels: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science', 'Biology', 'History'],
    data: [35, 28, 25, 22, 20, 20],
    colors: ['#007bff', '#28a745', '#dc3545', '#ffc107', '#6f42c1', '#e83e8c']
  };

  assignmentSubmissionChart: ChartData = {
    labels: ['Submitted', 'Pending', 'Overdue'],
    data: [78, 15, 7],
    colors: ['#198754', '#ffc107', '#dc3545']
  };

  monthlyAttendanceData = [
    { month: 'Jan', attendance: 85 },
    { month: 'Feb', attendance: 88 },
    { month: 'Mar', attendance: 82 },
    { month: 'Apr', attendance: 90 },
    { month: 'May', attendance: 87 },
    { month: 'Jun', attendance: 89 }
  ];

  recentActivities = [
    { action: 'New student enrolled', details: 'Alice Johnson joined Mathematics class', timestamp: '2024-01-15 10:30' },
    { action: 'Assignment submitted', details: 'Physics lab report by Bob Smith', timestamp: '2024-01-15 09:15' },
    { action: 'Attendance marked', details: 'Chemistry class - 28/30 present', timestamp: '2024-01-14 14:20' },
    { action: 'Message sent', details: 'Schedule change notification to all students', timestamp: '2024-01-14 08:45' },
    { action: 'Grade updated', details: 'Computer Science project grades posted', timestamp: '2024-01-13 16:30' }
  ];

  getPercentageColor(value: number): string {
    if (value >= 80) return 'text-success';
    if (value >= 60) return 'text-warning';
    return 'text-danger';
  }

  getProgressBarColor(value: number): string {
    if (value >= 80) return 'bg-success';
    if (value >= 60) return 'bg-warning';
    return 'bg-danger';
  }
}
