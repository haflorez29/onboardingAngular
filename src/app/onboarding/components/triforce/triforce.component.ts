import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserManagerServiceService } from '../../services/user-manager-service.service';

@Component({
  selector: 'app-triforce',
  templateUrl: './triforce.component.html',
  styleUrls: ['./triforce.component.css'],
})
export class TriforceComponent implements OnInit {
  userName: string;
  constructor(
    private userManagerServiceService: UserManagerServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userManagerServiceService.userName.subscribe(
      (user) => (this.userName = user)
    );
  }
}
