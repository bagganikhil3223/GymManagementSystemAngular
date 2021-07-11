import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLoginData } from 'src/app/models/UserLoginData';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.minLength(6)]],
      Password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  onFormSubmit(): void {
    const userData: UserLoginData = {
      userName: this.loginForm.controls.Email.value,
      passWord: this.loginForm.controls.Password.value
    };
    this.authService.login(userData);
  }

}
