import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../../../../services/usuarios/usuarios.service';

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrl: './admin-usuarios.component.scss'
})
export class AdminUsuariosComponent implements OnInit {
  public usuarios: any[] = [];
  selectedUser: any = { id: 0, nombre: '', email: '', activo: true, created_at: '', updated_at: '' };
  newUser: any = { nombre: '', email: '', password: '' };
  displayEditModal: boolean = false;
  isEditPassword: boolean = false;

  constructor(private _userService: UsuariosService) {}

  ngOnInit() {
    this.loadUsuarios();
  }

  loadUsuarios() {
    this._userService.getUsuarios().subscribe((data: any[]) => {
      this.usuarios = data;
    });
  }

  toggleActive(id: number, active: boolean) {
    this._userService.editarUsuario(id, { activo: active }).subscribe(
      (response) => {
        this.loadUsuarios();
      },
      (error) => {
        console.error('Error al actualizar el usuario', error);
      }
    );
  }

  editUser(userId: number) {
    // Cargar los datos del usuario en el formulario del modal
    const user = this.usuarios.find(u => u.id === userId);
    if (user) {
      this.selectedUser = { ...user }; 
      this.isEditPassword = false;
      this.displayEditModal = true;
    }
  }

  closeEditModal() {
    this.displayEditModal = false; 
  }

  onSubmit() {
    this._userService.editarUsuario(this.selectedUser.id, this.selectedUser).subscribe(
      (response) => {
        this.displayEditModal = false; 
        this.loadUsuarios();
      },
      (error) => {
        console.error('Error al actualizar el usuario', error);
      }
    );
  }

  onSubmitCrear() {
    this._userService.createUsuario(this.newUser).subscribe(
      (response) => {
        this.newUser = { nombre: '', email: '', password: '' };
        this.loadUsuarios();
      },
      (error) => {
        console.error('Error al crear el usuario', error);
      }
    );
  }
}
