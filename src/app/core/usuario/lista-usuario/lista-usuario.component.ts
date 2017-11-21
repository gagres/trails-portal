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
    this.resetResponse(); // Reinicia anterior do servidor

    this.usuarioService.getListOfUsers().subscribe(
      (usuarios: any) => {
        if(usuarios.message)
          return this.response.message = usuarios.message;
        
        if(usuarios.error)
          return this.response.error = usuarios.error;

        this.listaUsuarios = usuarios.rows;
        this.response.success = usuarios;
      },
      err => {
        console.log(err);
        throw err;
      }
    )
  }

  resetResponse() {
    this.response = { message: null, error: null, success: null };
  }

}
