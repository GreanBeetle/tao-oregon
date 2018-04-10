import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { UserService } from './user.service';
import { User } from './models/user.model';


@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;
  // authState: FirebaseAuthState = null;

  constructor(public afAuth: AngularFireAuth, private router:Router, public userServ: UserService) {
    this.user = afAuth.authState;
  }

  googleLogin() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  createUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then( response => {
      console.log("RESPONSE: " + response.uid);
      this.userServ.addUser(response.uid, response.email);
    })
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
