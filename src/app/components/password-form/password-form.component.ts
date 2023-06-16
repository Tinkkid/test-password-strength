import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css'],
})
export class PasswordFormComponent implements OnInit {
  strongPassword = false;
  visible: boolean = true;
  changeType: boolean = true;

  passwordForm: FormGroup;

  constructor() {
    this.passwordForm = new FormGroup({
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  get f() {
    return this.passwordForm.controls;
  }
  ngOnInit(): void {}

  onSubmit() {
    console.log(this.passwordForm.value);
    if (this.passwordForm.invalid) {
      return;
    }
    this.passwordForm.reset();
  }

  viewPassword() {
    this.visible = !this.visible;
    this.changeType = !this.changeType;
  }
}
