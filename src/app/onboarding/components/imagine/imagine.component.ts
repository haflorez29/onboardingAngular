import { Component, Input, OnInit } from '@angular/core';
import { UserManagerServiceService } from '../../services/user-manager-service.service';

@Component({
  selector: 'app-imagine',
  templateUrl: './imagine.component.html',
  styleUrls: ['./imagine.component.css'],
})
export class ImagineComponent implements OnInit {
  @Input() userName: string;

  constructor(private userManagerServiceService: UserManagerServiceService) {}

  ngOnInit(): void {
    this.userManagerServiceService.userName.subscribe(
      (user) => (this.userName = user)
    );
  }
}
