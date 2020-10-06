import { Component, Input, OnInit } from '@angular/core';
import { UserManagerServiceService } from '../../services/user-manager-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imagine',
  templateUrl: './imagine.component.html',
  styleUrls: ['./imagine.component.css'],
})
export class ImagineComponent implements OnInit {
  @Input() userName: string;

  constructor(
    private userManagerServiceService: UserManagerServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userManagerServiceService.userName.subscribe(
      (user) => (this.userName = user)
    );
  }

  carrerPath(): void {
    this.router.navigate(['/path']);
  }
}
