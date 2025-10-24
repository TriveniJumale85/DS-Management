import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-management',
  standalone: true,
  templateUrl: './parent-management.component.html',
  styleUrls: ['./parent-management.component.css']
})
export class ParentManagementComponent {
  parents = [
    {
      name: 'John Johnson',
      childName: 'Alice Johnson',
      contact: '9876543210',
      email: 'john.johnson@gmail.com',
      address: 'Pune, Maharashtra',
      relation: 'Father'
    },
    {
      name: 'Emma Smith',
      childName: 'Bob Smith',
      contact: '8765432109',
      email: 'emma.smith@gmail.com',
      address: 'Nagpur, Maharashtra',
      relation: 'Mother'
    },
    {
      name: 'Robert Brown',
      childName: 'Charlie Brown',
      contact: '7654321098',
      email: 'robert.brown@gmail.com',
      address: 'Amravati, Maharashtra',
      relation: 'Father'
    },
    {
      name: 'Sophia Wilson',
      childName: 'Diana Wilson',
      contact: '6543210987',
      email: 'sophia.wilson@gmail.com',
      address: 'Mumbai, Maharashtra',
      relation: 'Mother'
    }
  ];
}
