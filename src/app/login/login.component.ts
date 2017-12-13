import { Component } from '@angular/core'
import { NgForm, NgModel } from '@angular/forms'
import { Router } from '@angular/router'

// Services
import { AuthService } from './../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private authService: AuthService,
              private router: Router) { }

  login(formulario: NgForm) {
    if(formulario.value.email !== 'root' && formulario.value.passwd !== 'root')
      return alert('Usuário ou senha inválidos');

    this.authService.login().subscribe(
      res => {
        if(res == true)
          this.router.navigateByUrl('/dashboard');
      }
    )
  }

  hasErrorAndTouched(input: NgModel) {
    return input.invalid && input.touched;
  }
}
