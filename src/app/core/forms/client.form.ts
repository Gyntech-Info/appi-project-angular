import { FormControl, Validators } from "@angular/forms";

export const CLIENT_FORM = {
  name: new FormControl('', [Validators.required, Validators.minLength(5)]),
  cpf: new FormControl('', Validators.required),
  email: new FormControl('', [Validators.required, Validators.email])
}