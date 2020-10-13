import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-studio-item',
  templateUrl: './studio-item.component.html',
  styleUrls: ['./studio-item.component.css'],
})
export class StudioItemComponent implements OnInit {
  @Input() logoUrl: string;
  @Input() studioName: string;
  @Input() bgColor: string;

  constructor() {}

  ngOnInit(): void {}
}
