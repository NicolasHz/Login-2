import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/user/usuario.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  private status;

  constructor(private user: UsuarioService) { }

  ngOnInit() {
   this.status = this.user.getUserLogged() ? 'Online' : 'Offline';
}

}
