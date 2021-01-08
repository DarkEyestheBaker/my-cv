import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-exp',
  templateUrl: './work-exp.component.html',
  styleUrls: ['./work-exp.component.css']
})
export class WorkExpComponent implements OnInit {
  company = "Max Technical Training";
  role = "Student";
  startDate = '08/10/2020';
  endDate = '02/27/2021';
  constructor() { }

  ngOnInit(): void {
  }

}
