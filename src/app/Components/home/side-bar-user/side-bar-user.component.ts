import { Component } from '@angular/core';
import {HomeUserComponent} from "../home-user/home-user.component";
import {SideBarAdminComponent} from "../side-bar-admin/side-bar-admin.component";

@Component({
  selector: 'app-side-bar-user',
  templateUrl: './side-bar-user.component.html',
  styleUrls: ['./side-bar-user.component.css']
})
export class SideBarUserComponent extends SideBarAdminComponent{

}
