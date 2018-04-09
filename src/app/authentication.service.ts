import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';




@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;
  // authState: FirebaseAuthState = null;

  constructor(public afAuth: AngularFireAuth, private router:Router) {
    this.user = afAuth.authState;
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

  signIn(email, password) {
    if (firebase.auth().currentUser) {
      firebase.auth().signOut();
    } else {
     firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.name;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
        console.log(error);
      });
     }
   }



  logout() {
    this.afAuth.auth.signOut();
  }

}
