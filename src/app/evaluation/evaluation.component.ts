import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-evaluation',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './evaluation.component.html',
  styleUrl: './evaluation.component.css'
})
export class EvaluationComponent {

  evaluation = {
    name: '',
    function: null,
    dept: null,
    course: null,
    contentGrade: 3,
    teacherGrade: 3,
    useGrade: 3,
    feedbackTeacher: ''
  }

  evaluationForm = new FormGroup({
  name : new FormControl(this.evaluation.name, [Validators.required, Validators.minLength(2)]),
  function : new FormControl(this.evaluation.function,[Validators.nullValidator]),
  dept : new FormControl(this.evaluation.dept, [Validators.nullValidator]),
  course : new FormControl(this.evaluation.course, Validators.nullValidator),
  contentGrade : new FormControl(this.evaluation.contentGrade),
  teacherGrade : new FormControl(this.evaluation.teacherGrade),
  useGrade : new FormControl(this.evaluation.useGrade),
  feedbackTeacher : new FormControl(this.evaluation.feedbackTeacher)
  }

  )

  depts = [
    'sales',
    'marketing',
    'IT',
    'support',
    'dictu'
  ]

  courses = [
    'Angular',
    'JavaScript',
    'TypeScript',
    'VueJS',
    'RxJS'
  ]

  onSubmitForm(evt:Event) {
    console.log(this.evaluation)
  }
  
}
