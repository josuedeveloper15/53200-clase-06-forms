import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.scss',
})
export class TemplateDrivenComponent {
  /**
   * Modelo de formulario
   * {
   *  name: '',
   *  lastName: '',
   *  email: '',
   * contrasena: ''
   * }
   *
   */

  myFormModel = {
    name: '',
    lastName: '',
    email: '',
    contrasena: '',
  };

  onSubmit(ngForm: NgForm): void {
    console.log(ngForm);
    if (ngForm.valid) {
      Swal.fire({
        title: 'Enviado',
        icon: 'success',
      });
      console.log(ngForm.form.value);
    } else {
      ngForm.form.markAllAsTouched();
      // Swal.fire({
      //   title: 'Error',
      //   icon: 'error',
      // });
    }
  }
}
