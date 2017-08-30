import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';

@Injectable()
export class UsuarioService {
    private isUserlogged;
    private username;
    private password;
  constructor() {
     this.isUserlogged = false;
    }
  setUserLogged() {
    this.isUserlogged = true;
  }
  getUserLogged() {
    return this.isUserlogged;
  }
  setUser(usr: string, pass: string) {
    this.username = usr;
    this.password = pass;
  }
  getUserName() {
   return this.username;
  }
  getUserPass() {
   return this.password;
  }
  logOut(): void {
    this.username = '';
    this.password = '';
  }

  public async logIn() {
   return new Promise((resolve, reject) => {
      if (this.username === 'admin' && this.password === 'admin') {
        setTimeout(() => {
        this.setUserLogged();
          resolve(true);
        }, 3000);
      } else {
          resolve(false);
      }
  });
  }
}
