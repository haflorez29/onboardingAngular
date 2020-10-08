import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-next',
  templateUrl: './button-next.component.html',
  styleUrls: ['./button-next.component.css'],
})
export class ButtonNextComponent implements OnInit {
  @Input() path: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  routerTo(): void {
    this.router.navigate([`/${this.path}`]);
  }
}
