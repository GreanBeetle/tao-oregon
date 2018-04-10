import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [ AuthenticationService, UserService ]
})

export class AuthComponent {
hasAccount = true;
user;

constructor(public authService: AuthenticationService, public userService: UserService) {

}

  toggleHasAccount() {
    this.hasAccount = !this.hasAccount;
  }

  signIn(email, password) {
    this.authService.signIn(email, password);
  }

  createUser(email, password) {
    this.authService.createUser(email, password)
    console.log(email + " " + password);
  }

  googleLogin() {
    this.authService.googleLogin();
  }

  signOut() {
    this.authService.logout();
  }

}
