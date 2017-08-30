import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/user/usuario.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  private loader;
  private passerror;

  constructor(private router: Router,  private user: UsuarioService) { }

  ngOnInit() {
  }

  async logIn() {
    this.loader = true;
    if (await this.user.logIn()) {
      this.router.navigate(['welcome']);
    }else { this.loader = false; this.passerror = true; }
  }
}
