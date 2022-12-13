import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  setLoggedUserFromLocalStorage(loggedUser: string) {
    throw new Error('Method not implemented.');
  }
  users: User[] = [{"username":"admin","password":"123","roles":['ADMIN']},
  {"username":"nadhem","password":"123","roles":['USER']} ];
  public loggedUser:string | undefined ;
public isloggedIn: Boolean = false;
public roles:string[] | undefined;
constructor(private router: Router) { }
SignIn(user :User):Boolean{
  let validUser: Boolean = false;
  this.users.forEach((curUser) => {
  if(user.username=== curUser.username && user.password==curUser.password) {
  validUser = true;
  this.loggedUser = curUser.username;
  this.isloggedIn = true;
  this.roles = curUser.roles;
  localStorage.setItem('loggedUser',this.loggedUser!);
  localStorage.setItem('isloggedIn',String(this.isloggedIn));
  }
  });
  return validUser;
  }
  logout() {
    this.isloggedIn= false;
    this.loggedUser = undefined;
    this.roles = undefined;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    this.router.navigate(['/login']);
    }
    isAdmin():Boolean{
      if (!this.roles) //this.roles== undefiened
      return false;
      return (this.roles.indexOf('ADMIN') >-1) ;
      ;
      }
}
