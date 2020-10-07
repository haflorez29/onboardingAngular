import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-path',
  templateUrl: './card-path.component.html',
  styleUrls: ['./card-path.component.css'],
})
export class CardPathComponent implements OnInit {
  @Input() seniorityLevels = [];
  @Input() border = '';

  constructor() {}

  ngOnInit(): void {}
}
