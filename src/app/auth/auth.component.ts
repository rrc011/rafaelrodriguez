import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../core/models/login';
import { AuthenticationService } from '../core/services/authentication.service';
import { AuthService } from './guards/auth.guard';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  model:Login = new Login();

  constructor(private authService:AuthenticationService, private router:Router) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model).toPromise().then(r => {
      this.router.navigateByUrl('/')
    })
  }

}
