import { Component, Input} from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ AuthenticationService ]
})
export class AppComponent {
  user;
  private isLoggedIn: boolean;


constructor(public authService: AuthenticationService, private router: Router) {
  this.authService.user.subscribe(theUser => {
    this.user = theUser
    if (theUser == null) {
      this.isLoggedIn = false;
      console.log("if " + this.isLoggedIn);
    } else {
      this.isLoggedIn = true;
      console.log("else " + this.isLoggedIn);
    }
  });
}

  signOut() {
    this.authService.logout();
  }

  goToMyTrails(userID) {
    console.log("YOUR ID IS: ", userID)
    this.router.navigate(['user', userID])
  }

}
