import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-layout',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-layout.component.html',
  styleUrl: './login-layout.component.scss',
})
export class LoginLayoutComponent {
  loginForm: any;
  registerForm: any;
  activeForm: 'login' | 'register' = 'login';

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });

    this.registerForm = this.fb.group({
      phone:            ['', [Validators.required]],
      fullname:         ['', [Validators.required]],
      alternativephone: ['', [Validators.required]],
      email:            ['', [Validators.required, Validators.email]],
      password:         ['', [Validators.required, Validators.minLength(4)]],
    });
  }


  toggleForm(form: 'login' | 'register') {
    this.activeForm = form;
  }

  login(){
    if(this.loginForm.valid) {
      console.log('Logged in with ', this.loginForm.value);
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Erro ao entrar ', this.loginForm.value);
      //this.snackBar.open('Invalid email or password', 'Close', {duration: 3000});
    }
  }

  register() {
    if(this.registerForm.valid) {
      console.log("Register info ==>", this.registerForm.value);
      setTimeout(()=> {
        window.location.reload();
      },2000);
      this.router.navigate(['/dashboard']);
      }else {
        console.log('Erro ao registrar ', this.loginForm.value);
        //this.snackBar.open('Please fill out all the fields correctly', 'Close', {duration: 3000})
      }

  }

}
