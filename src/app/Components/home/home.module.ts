import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomeUserComponent } from './home-user/home-user.component';
import {HomeRoutingModule} from "./home-routing.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatBadgeModule} from "@angular/material/badge";
import { SideBarUserComponent } from './side-bar-user/side-bar-user.component';
import { SideBarAdminComponent } from './side-bar-admin/side-bar-admin.component';



@NgModule({
  declarations: [
    HomeAdminComponent,
    HomeUserComponent,
    SideBarUserComponent,
    SideBarAdminComponent
  ],
  exports: [
    SideBarAdminComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatBadgeModule
  ]
})
export class HomeModule { }
