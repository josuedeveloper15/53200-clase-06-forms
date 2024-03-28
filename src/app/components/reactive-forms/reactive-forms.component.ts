import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  // loginForm = this.formBuilder.group({})

  // userForm: FormGroup;

  userForm = this.formBuilder.group({
    // name: this.formBuilder.control(''),
    name: [''],
    lastName: this.formBuilder.control(''),
    email: this.formBuilder.control(''),
  });

  constructor(private formBuilder: FormBuilder) {
    // this.userForm = this.formBuilder.group({
    //   // name: this.formBuilder.control(''),
    //   name: [''],
    //   lastName: this.formBuilder.control(''),
    //   email: this.formBuilder.control(''),
    // });
  }
}
