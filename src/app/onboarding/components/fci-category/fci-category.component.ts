import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fci-category',
  templateUrl: './fci-category.component.html',
  styleUrls: ['./fci-category.component.css'],
})
export class FciCategoryComponent implements OnInit {
  excellent: string[] = ['Focused', 'Committed'];
  act: string[] = ['Integrity'];
  constIn: string[] = ['Fast Learner', 'Clear Thinker', 'Innovative'];
  team = ['Flexible', 'Collaborative', 'Inclusive'];

  constructor() {}

  ngOnInit(): void {}
}
