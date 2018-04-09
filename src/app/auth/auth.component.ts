import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [ AuthenticationService ]
})
export class AuthComponent {
  user;
  uid;
  userEmail;

constructor(public authService: AuthenticationService) {
  this.authService.user.subscribe(user => {
    this.uid = user.uid;
    this.user = user.displayName;
    this.userEmail = user.email; // ACTUALLY DISPLAYS THE EMAIL
  });
}

  signIn(email, password) {
    this.authService.signIn(email, password);
  }

  createUser(email, password) {
    this.authService.createUser(email, password);
    this.user = this.authService.user;
    console.log(email + " " + password);
    console.log("USER: " + this.user);
  }

  googleLogin() {
    this.authService.googleLogin();
  }

  signOut() {
    this.authService.logout();
  }

}
