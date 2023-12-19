import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../Services/user.service";
import {User} from "../../../Classes/user";

@Component({
  selector: 'app-my-personal-info',
  templateUrl: './my-personal-info.component.html',
  styleUrls: ['./my-personal-info.component.css']
})
export class MyPersonalInfoComponent implements OnInit{

  user!:User;
  id!:number;
  constructor(private userService:UserService) {}

  ngOnInit() {
    this.id=Number(sessionStorage.getItem("idUser"));
    this.getMyInfo();
  }

  getMyInfo(){
    this.userService.getUserById(this.id).subscribe(
      (data)=>{
        this.user=data;
      },
      (error)=>{
        console.log(error);
      }
    )
  }



}
