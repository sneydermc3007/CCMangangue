import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { CardModule } from 'primeng/card';
import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { UsuariosService } from '../services/usuarios/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    CardModule,
    MessagesModule,
    ButtonModule,
    TooltipModule,
    ToastModule,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  providers: [MessageService],
})
export class AuthComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private _usuarios: UsuariosService,
    private msg: MessageService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    if(sessionStorage.getItem('usuario'))
      this.router.navigate(['login/admin']);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this._usuarios.login(email, password).subscribe(
        (usuario: any) => {
          console.log('Usuario:', usuario);

          this.msg.add({ severity: 'success', summary: 'Éxito', detail: 'Inicio de sesión exitoso' });
          sessionStorage.setItem('usuario', JSON.stringify(usuario));
          
          setTimeout(() => {
            this.router.navigate(['login/admin']);
          }, 3000);
          this.loginForm.reset();
        },
        (error: any) => {
          const errorMessages: { [key: number]: string } = {
            404: error.error.message,
            401: error.error.message,
            403: error.error.message,
            500: error.error.message
          };
        
          const message = errorMessages[error.status] || 'Ha ocurrido un error inesperado';
          this.msg.add({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
        }
      );
    }
  }
}
