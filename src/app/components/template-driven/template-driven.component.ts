import { Component } from '@angular/core';

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
}
