import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { ListUsersComponent } from './list-users/list-users.component';
import {MatBadgeModule} from "@angular/material/badge";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {HomeModule} from "../home/home.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import { MyPersonalInfoComponent } from './my-personal-info/my-personal-info.component';


@NgModule({
  declarations: [
    ListUsersComponent,
    MyPersonalInfoComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    HomeModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    ReactiveFormsModule
  ]
})
export class UserManagementModule { }
