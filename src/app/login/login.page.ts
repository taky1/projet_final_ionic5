import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private auth:AuthenticationService,
    private router: Router) { }

  ngOnInit() {
  }
  onLogin(add){
    let res = this.auth.login(add.user, add.password);
    if (res == true) {
        this.router.navigateByUrl('home');
    } else {
        this.router.navigateByUrl('login');
        alert('verfiez vous information');
    }
}}
