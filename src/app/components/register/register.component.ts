import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, MaxLengthValidator } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form;
  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.form = fb.group({

      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, emailValid()]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, { validator: matchingFields('password', 'confirmPassword')});
  }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.form.errors);
    this.auth.register(this.form.value);
  }
  isValid(control) {
    return this.form.controls[control].invalid && this.form.controls[control].touched;
  }

}

function matchingFields(field1, field2) {
  return form => {
    if (form.controls[field1].value !== form.controls[field2].value) {
      return { mismatchedFields: true }
    }
  }
}

function emailValid() {
   return control => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(control.value) ? null : { invalidEmail: true}
   }
}