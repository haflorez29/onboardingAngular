import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserManagerServiceService {
  userName = new BehaviorSubject<string>('');

  constructor() {}

  addUser(newUserName: string): void {
    this.userName.next(
      newUserName.charAt(0).toUpperCase() + newUserName.slice(1)
    );
  }
}
