import { Component } from '@angular/core';
import {AuthenticationRequest} from "../../Classes/authentication-request";
import {AuthService} from "../../Services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    const authRequest: AuthenticationRequest = { email: this.username, password: this.password };

    this.authService.login(authRequest).subscribe(
      (response) => {
        const role = response.roleName;
        sessionStorage.setItem('token', response.token);
        sessionStorage.setItem('role', response.roleName);
        sessionStorage.setItem('idUser',response.idUser);

        if (role === 'ADMIN') {
          this.router.navigate(['/home/admin']);
        }

        else if (role === 'USER') {
          this.router.navigate(['/home/user']);
        }

      },
      (error) => {
        console.log(error);
      }
    );
  }


}
