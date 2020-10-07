import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css'],
})
export class RangeComponent implements OnInit {
  senior: string[] = ['ARCHITECT', 'SOFWARE DESIGNER', 'SENIOR'];
  initial: string[] = [
    'SEMI SENIOR ADV',
    'SEMI SENIOR',
    'JUNIOR ADV',
    'JUNIOR',
  ];
  expert: string[] = [
    'SUBJECT MATTER EXPERT',
    'SUBJECT MATTER EXPERT',
    'SUBJECT MATTER EXPERT',
  ];
  mgm: string[] = [
    'TECHNICAL DIRECTOR',
    'TECHNICAL DIRECTOR',
    'TECHNICAL MANAGER',
  ];

  constructor() {}

  ngOnInit(): void {}
}
