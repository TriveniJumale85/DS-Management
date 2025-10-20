import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-syllabus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css']
})
export class SyllabusComponent {
  syllabusList = [
    { std: 'Std - 1 (Notes)' },
    { std: 'Std - 2 (Notes)' },
    { std: 'Std - 3 (Notes)' },
    { std: 'Std - 4 (Notes)' },
    { std: 'Std - 5 (Notes)' },
    { std: 'Std - 6 (Notes)' },
    { std: 'Std - 7 (Notes)' },
    { std: 'Std - 8 (Notes)' },
    { std: 'Std - 9 (Notes)' },
    { std: 'Std - 10 (Notes)' }
  ];
}
