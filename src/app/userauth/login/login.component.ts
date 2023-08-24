import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttppostService } from 'src/app/httppost.service';
// import { HttppostService } from './path-to-your-service/httppost.service'; // Adjust the path accordingly
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private http: HttpClient, private httppostService: HttppostService) {}

  onSubmit(form: { valid: any; value: any; }) {
    if (form.valid) {
      // Here you can implement your authentication logic
      console.log('Form submitted:', form.value);

      // You can now use the HttpClient instance in your service
      this.httppostService.postData(form.value).subscribe(
        (        response: any) => {
          console.log('HTTP POST response:', response);
          // Handle the response as needed
        },
        (        error: any) => {
          console.error('HTTP POST error:', error);
          // Handle the error as needed
        }
      );
    }
  }
}
