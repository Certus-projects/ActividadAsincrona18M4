import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  email: string | undefined;
  password: string | undefined;
  response: any;

  constructor(private http: HttpClient) {}

  submit() {
    this.http
      .post('https://reqres.in/api/registerUser', {
        email: this.email,
        password: this.password,
      })
      .subscribe((response) => (this.response = response));
  }
}
