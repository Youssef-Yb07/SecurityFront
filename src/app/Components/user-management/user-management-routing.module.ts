import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListUsersComponent} from "./list-users/list-users.component";
import {authGuard} from "../../AuthGuard/auth.guard";
import {MyPersonalInfoComponent} from "./my-personal-info/my-personal-info.component";

const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    children: [
      { path: 'get/all', component: ListUsersComponent },
      { path: 'info', component: MyPersonalInfoComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
