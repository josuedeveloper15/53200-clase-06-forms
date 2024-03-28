import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss',
})
export class ReactiveFormsComponent {
  /**
   * Entidades que manipulan los formularios de Angular
   *
   * FormGroup - Agrupar otros controles y definir un objeto
   * FormControl - Manipula el valor de los campos (inputs, selects, checkboxs, textarea)
   * FormArray - Manejar arrays de otros controles
   *
   * Modelo de formulario
   * {
   *    name: 'Matias',
   *    lastName: 'Gonzales',
   *    email: 'mati@mail.com',
   * }
   *
   */

  userForm = this.formBuilder.group({
    name: this.formBuilder.control(''),
    lastName: this.formBuilder.control(''),
    email: this.formBuilder.control(''),
  });

  constructor(private formBuilder: FormBuilder) {}
}
