import { Component, Input} from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AuthenticationService ]
})
export class AppComponent {
  user;
  userId;
  userEmail;

constructor(public authService: AuthenticationService) {
  this.authService.user.subscribe(user => {
    this.userId = user.uid;
    this.user = user.displayName;
    this.userEmail = user.email; // ACTUALLY DISPLAYS THE EMAIL
  });
}

  signOut() {
    this.authService.logout();
  }
}
