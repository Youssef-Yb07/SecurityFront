import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeAdminComponent} from "./home-admin/home-admin.component";
import {HomeUserComponent} from "./home-user/home-user.component";
import {authGuard} from "../../AuthGuard/auth.guard";

const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    children: [
      { path: 'admin', component: HomeAdminComponent },
      { path: 'user', component: HomeUserComponent },
      // Add other child routes as needed
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
