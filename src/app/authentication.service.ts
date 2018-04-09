import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';


@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;
  uid;
  userEmail;

  constructor(public afAuth: AngularFireAuth, private router:Router) {
    // this.user.subscribe(person => {
    //   this.uid = person.uid;
    //   this.userEmail = person.email;
    // });
  }

  googleLogin() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  createUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.name;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
    }); // error function
  } // createUser



  logout() {
    this.afAuth.auth.signOut();
  }

}
