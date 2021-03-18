import { AuthenticationService } from './../service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "admin";
  password: string = "admin";

  errorMessage: string = "Invalid Credentials !!!";

  isValidUser: boolean = true;

  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    
    this.authService.authenticate(this.username, this.password).subscribe(
      response => {
        this.router.navigate(['home']);
        this.isValidUser = true;
      },
      error => {
        this.isValidUser = false;
      }
    )
  }

}
