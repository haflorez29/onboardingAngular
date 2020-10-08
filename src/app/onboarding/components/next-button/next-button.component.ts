import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-next-button',
  templateUrl: './next-button.component.html',
  styleUrls: ['./next-button.component.css'],
})
export class NextButtonComponent implements OnInit {
  @Input() path: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  routerTo(): void {
    this.router.navigate([`/${this.path}`]);
  }
}
