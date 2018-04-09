import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [ AuthenticationService ]
})
export class AuthComponent {
hasAccount = true;

constructor(public authService: AuthenticationService) {

}

  toggleHasAccount() {
    this.hasAccount = !this.hasAccount;
  }

  signIn(email, password) {
    this.authService.signIn(email, password);
  }

  createUser(email, password) {
    this.authService.createUser(email, password);
    console.log(email + " " + password);
  }

  googleLogin() {
    this.authService.googleLogin();
  }

  signOut() {
    this.authService.logout();
  }

}
