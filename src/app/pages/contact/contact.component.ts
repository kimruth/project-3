import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name = "";
  email = "";
  message = "";
  successMessage = "";
  errorMessage = "";

  constructor(
    private router: Router,
    private emailService: EmailService
  ) {}

  sendEmail() {
    this.emailService.sendEmail(this.name, this.email, this.message).subscribe(
      (response) => {
        this.successMessage = "Message envoyé avec succès !";
        this.errorMessage = "";
        this.name = "";
        this.email = "";
        this.message = "";
      },
      (error) => {
        this.errorMessage = "Erreur lors de l'envoi du message.";
        this.successMessage = "";
      }
    );
  }
  
  logout(){
    
    localStorage.removeItem('auth')
    this.router.navigate(['signin'])
    
  }
}
