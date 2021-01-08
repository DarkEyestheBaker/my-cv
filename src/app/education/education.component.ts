import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  school = "Edinboro University of PA";
  year = '1992';
  major = 'Education';
  constructor() { }

  ngOnInit(): void {
  }

}
