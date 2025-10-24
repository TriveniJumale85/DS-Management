import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parent-management.component.html',
  styleUrls: ['./parent-management.component.css']
})
export class ParentManagementComponent {
  parents = [
    { id: 1, name: 'Ravi Sharma', email: 'ravi@gmail.com', phone: '9876543210', student: 'Aarav Sharma' },
    { id: 2, name: 'Sneha Patil', email: 'sneha@gmail.com', phone: '8765432109', student: 'Kritika Patil' },
    { id: 3, name: 'Amit Joshi', email: 'amit@gmail.com', phone: '9988776655', student: 'Rohan Joshi' }
  ];

  deleteParent(id: number) {
    this.parents = this.parents.filter(p => p.id !== id);
  }
}
