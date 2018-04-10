import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>

  constructor(private database: AngularFireDatabase) {
    this.users = database.list('users');
  }

  getUsers() {
    return this.users;
  }

  addUser(uid, email) {
    var user = new User(uid, email);
    this.users.push(user);
  }

  findUser(theUID: string) {
    return this.database.object('users/' + theUID)
  }

}
