import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserManagerServiceService } from '../../services/user-manager-service.service';

@Component({
  selector: 'app-welcome-form',
  templateUrl: './welcome-form.component.html',
  styleUrls: ['./welcome-form.component.css'],
})
export class WelcomeFormComponent implements OnInit {
  nameUser = '';

  constructor(
    private router: Router,
    private userManagerServiceService: UserManagerServiceService
  ) {}

  ngOnInit(): void {}

  saveUser(): void {
    this.userManagerServiceService.addUser(this.nameUser);
    this.nameUser = '';
    this.router.navigate(['/imagine']);
  }
}
