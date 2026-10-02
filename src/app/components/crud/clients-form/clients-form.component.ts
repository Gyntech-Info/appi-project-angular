import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CLIENT_FORM } from "../../../core/forms/client.form";

@Component({
  selector: 'app-clients-form',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './clients-form.component.html',
  styleUrl: './clients-form.component.scss',
})
export class ClientsFormComponent {

  private readonly formBuilder = inject(FormBuilder)

  public clientForm: FormGroup = this.formBuilder.group(CLIENT_FORM);
  private client!: { name: string, email: string, cpf: string }

  public submitForm() {
    this.client = this.clientForm.value
    console.log(this.client)
  }
}