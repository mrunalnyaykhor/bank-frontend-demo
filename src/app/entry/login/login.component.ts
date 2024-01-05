import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = 'username'
  password = 'password'
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  //Router
  //Angular.giveMeRouter
  //Dependency Injection
  constructor(private router: Router,
    ) { }

  ngOnInit() {
  }

  handleLogin() {
    console.log(this.username);
    if(this.username==="username" && this.password === 'password') {
    if(this.username, this.password) {
      //Redirect to Welcome Page
      this.router.navigate(['myaccount'])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}
}
