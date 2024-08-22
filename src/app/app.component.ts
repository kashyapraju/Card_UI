import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgbModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "Features";


  cards = [
    { image: 'https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/summer-program/course-features-icons/months_of_program.svg', heading: 'Personalised Program', text: 'Master your skills from where you are, with India only personalised program' },
    { image: 'https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/summer-program/course-features-icons/expert_mentor.svg', heading: 'Expert Mentors', text: 'Get career guidance, mentorship, time management strategies from industry experts' },
    { image: 'https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/summer-program/course-features-icons/50_hours_content.svg', heading: '25+ Hours of Videos', text: 'Recorded video lectures by experts to help you understand the concepts easily' },
    { image: 'https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/summer-program/course-features-icons/live_classes.svg', heading: '15+ Live Coding Sessions', text: 'Code live and get mentorship with the top-rated coders of the country.' },
    { image: 'https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/summer-program/course-features-icons/100_interview_qsn.svg', heading: '150+ Coding Questions', text: 'Best way to master a language is by coding in the language' },
    { image: 'https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/summer-program/course-features-icons/quiz.svg', heading: '40+ Coding quizes', text: 'Small quizzes after every topic to give you a quick check on your understandings' },
    { image: 'https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/summer-program/course-features-icons/daily_doubt_support.svg', heading: 'Quick Doubt Resolution', text: 'Get your doubts cleared by coding experts and have a smooth learning.' },
    { image: 'https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/summer-program/course-features-icons/certification.svg', heading: 'Get Certified', text: 'Get recognized on course completion with highly reputed PrepBytes certificates' }
  

  ];

}
