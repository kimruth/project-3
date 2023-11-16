import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  signinForm: FormGroup = new FormGroup({});
  loginError: string = '';
  error_message: string | null = null

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {

  }

  ngOnInit(): void {

    this.signinForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],

      password: ['', [
        Validators.required
      ]]
    })
  }

  private clearError(): void {
    setTimeout(() => {
      this.loginError = ''
    }, 3000);
  }

  onSubmit() {

    const form = this.signinForm.value;
    const login = this.authService.login(form.email, form.password)
    if (login.error) {

      this.loginError = login.message;
      this.clearError();
    } else {
      console.log(login.data);
      localStorage.setItem('auth', JSON.stringify(login.data))
      this.router.navigate(['accueil'], {

        queryParams: { id: login.data?.id }

      })

    }
  }
}
