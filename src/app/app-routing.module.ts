import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./Components/login-page/login-page.component";

const routes: Routes = [
  { path: 'login', component:LoginPageComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'user', loadChildren: () => import('./Components/user-management/user-management.module').then(m => m.UserManagementModule) },
  {path:'home', loadChildren:() => import('./Components/home/home.module').then(m => m.HomeModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
