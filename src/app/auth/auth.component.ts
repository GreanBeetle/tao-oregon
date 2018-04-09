import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [ AuthenticationService ]
})
export class AuthComponent implements OnInit {

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }

  createUser(email, password) {
    this.authService.createUser(email, password);
  }

  googleLogin() {
    this.authService.googleLogin();
  }

  signOut() {
    this.authService.logout();
  }

}
