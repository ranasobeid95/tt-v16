import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataAuthService } from '../services/auth.service';
import { v4 as uuidv4 } from 'uuid';
import { SharedFunctionsService } from '../services/shared-functions.service';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
interface LoginForm {
  password: string;
  emailOrPhoneNumber: string;
}

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, FormsModule],

  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.less'],
})
export class SigninComponent implements OnInit {
  submittingForm = false;
  loginRequest!: LoginRequest;
  authForm: LoginForm;
  constructor(
    private _authService: DataAuthService,
    private _sharedFunctions: SharedFunctionsService,
    public dialogRef: MatDialogRef<SigninComponent>,
    private _router:Router
  ) {}

  ngOnInit() {
    this.authForm = { emailOrPhoneNumber: '', password: '' };
  }

  onSubmit(event, form) {
    this.submittingForm = true;
    this.login({
      email: form.controls.emailOrPhoneNumber.value,
      password: form.controls.password.value,
    });
  }

  isPassword(pass: HTMLInputElement) {
    return pass.type.indexOf('password') > -1;
  }

  changePasswordType(pass: HTMLInputElement) {
    this.isPassword(pass)
      ? pass.setAttribute('type', 'text')
      : pass.setAttribute('type', 'password');
  }

  login({ email, password }) {
    this.prepareLoginRequest({ email, password });
    this._authService.login(this.loginRequest).subscribe(
      (response) => {
        this.dialogRef.close(true)
        this._router.navigate(['/profiles']);

      },
      (error: any) => {
        console.log('error: login', error);
      }
    );
  }

  prepareLoginRequest({ email, password }) {
    this.loginRequest = {
      emailOrPhoneNumber: email,
      password: this._sharedFunctions.md5(password),
      deviceDescription: this._sharedFunctions.getBrowser(),
      deviceToken: uuidv4(),
      deviceType: 1,
      isEarthLink: true,
      isScopeSky: true,
      isHalaSat: true,
    };
  }
}
