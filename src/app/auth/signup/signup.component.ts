import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm!: FormGroup
  saveError!: string

  constructor(
    private formbuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.signupForm = this.formbuilder.group({

      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+$/)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,10}$/),
      ]),
    })
  }
  onSubmit(): void {
    const save = this.authService.register(this.signupForm.value);
    if (save.error) {
      // this.router.navigate(['/login']);
      localStorage.setItem('auth', JSON.stringify(save.data))
      this.router.navigate(['accueil'], {
      })
    } else {

      this.saveError = save.message
    }
  }
}