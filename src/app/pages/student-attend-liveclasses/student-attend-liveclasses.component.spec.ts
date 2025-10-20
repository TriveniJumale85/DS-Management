import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAttendLiveclassesComponent } from './student-attend-liveclasses.component';

describe('StudentAttendLiveclassesComponent', () => {
  let component: StudentAttendLiveclassesComponent;
  let fixture: ComponentFixture<StudentAttendLiveclassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentAttendLiveclassesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentAttendLiveclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
