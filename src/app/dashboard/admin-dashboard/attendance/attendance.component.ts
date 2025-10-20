import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AttendanceRecord {
  id: number;
  studentName: string;
  course: string;
  date: string;
  status: 'Present' | 'Absent' | 'Late';
  timeIn?: string;
  timeOut?: string;
}

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.css'
})
export class AttendanceComponent {
  attendanceRecords: AttendanceRecord[] = [
    {
      id: 1,
      studentName: 'Alice Johnson',
      course: 'Mathematics',
      date: '2024-01-15',
      status: 'Present',
      timeIn: '08:30',
      timeOut: '15:30'
    },
    {
      id: 2,
      studentName: 'Bob Smith',
      course: 'Physics',
      date: '2024-01-15',
      status: 'Present',
      timeIn: '08:45',
      timeOut: '15:45'
    },
    {
      id: 3,
      studentName: 'Charlie Brown',
      course: 'Chemistry',
      date: '2024-01-15',
      status: 'Late',
      timeIn: '09:15',
      timeOut: '15:30'
    },
    {
      id: 4,
      studentName: 'Diana Wilson',
      course: 'Computer Science',
      date: '2024-01-15',
      status: 'Absent'
    }
  ];

  getStatusClass(status: string): string {
    switch (status) {
      case 'Present':
        return 'text-success';
      case 'Absent':
        return 'text-danger';
      case 'Late':
        return 'text-warning';
      default:
        return '';
    }
  }
}
