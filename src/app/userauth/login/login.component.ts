import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(){}
    onSubmit(form: { valid:any; value: any; }) {
      if (form.valid) {
        // Here you can implement your authentication logic
        console.log('Form submitted:', form.value);
        
      }
    }
  }



