import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-form',
  templateUrl: './welcome-form.component.html',
  styleUrls: ['./welcome-form.component.css'],
})
export class WelcomeFormComponent implements OnInit {
  nameUser = '';

  constructor() {}

  ngOnInit(): void {}

  saveUser() {
    console.log(this.nameUser);
    this.nameUser = '';
  }
}
