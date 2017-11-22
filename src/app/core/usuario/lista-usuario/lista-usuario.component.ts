import { Component, OnInit } from '@angular/core';

// Services
import { UsuarioService } from './../usuario.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  listaUsuarios: any = []
  response: any;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.resetResponse();
    this.getListOfUsers();
  }
  
  updateLista() {
    this.resetResponse('usuario');
    this.getListOfUsers();
  }
  
  getListOfUsers() {
    this.usuarioService.getListOfUsers().subscribe(
      (usuarios: any) => {
        if(usuarios.message)
          return this.response.usuario.message = usuarios.message;

        this.listaUsuarios = usuarios.rows;
        this.response.usuario.success = usuarios;
      },
      (err: any) => {
        console.log(err);
        this.response.usuario.error = err.message;
      }
    )
  }

  changeStatusUser(usuario: any, newStatus: boolean) {
    this.resetResponse('status');

    this.usuarioService.changeStatusUser(usuario.userID, newStatus).subscribe(
      (response: any) => {
        if(response.message)
          this.response.status.message = response.message;

        this.response.status.success = 
          `O novo status de ${usuario.realname} agora é ${ newStatus ? 'Ativo' : 'Inativo' }`;

        usuario.active = newStatus;
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
