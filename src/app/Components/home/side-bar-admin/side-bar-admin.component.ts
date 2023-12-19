import { Component } from '@angular/core';
import {AuthService} from "../../../Services/auth.service";

@Component({
  selector: 'app-side-bar-admin',
  templateUrl: './side-bar-admin.component.html',
  styleUrls: ['./side-bar-admin.component.css']
})
export class SideBarAdminComponent{

  constructor(private authService:AuthService) {
  }

  logout(){
    this.authService.logout();
  }

}
