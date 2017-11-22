import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Services
import { UsuarioService } from './../usuario.service';

@Component({
  selector: 'app-usuario-info',
  templateUrl: './usuario-info.component.html',
  styleUrls: []
})
export class UsuarioInfoComponent implements OnInit {

  usuarioSelected: any;
  response: any = {};

  constructor(private state: ActivatedRoute,
              private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.resetResponse();

    this.state.params.subscribe(
      (params: any) => {
        this.getUserById(params.userID);
      }
    )
  }

  getUserById(userID) {
    this.usuarioSelected = null;

    this.usuarioService.getUserById(userID).subscribe(
      (usuario: any) => {
        if(usuario.message)
          return this.response.usuario.message = usuario.message;

        console.log(usuario.rows[0]);
        this.usuarioSelected = usuario.rows[0]
      },
      (err: any) => {
        console.log(err);
      }
    )
  }

  changeStatusUser(newStatus: boolean) {
    this.resetResponse('status');

    this.usuarioService.changeStatusUser(this.usuarioSelected.userID, newStatus).subscribe(
      (response: any) => {
        if(response.message)
          this.response.status.message = response.message;

        this.usuarioSelected.active = newStatus;
      },
      (err: any) => {
        console.log(err);
        this.response.status.error = err;
      }
    )
  }

  resetResponse(name?: string) {
    if(name)
      return this.response[name] = {};

    this.response = { usuario: {}, status: {} };
  }

}
