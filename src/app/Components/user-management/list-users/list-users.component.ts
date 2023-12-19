import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../Services/user.service';
import { User } from '../../../Classes/user';
import { HomeAdminComponent } from '../../home/home-admin/home-admin.component';
import {Router} from "@angular/router";
import {createUserDTO} from "../../../Classes/createUserDTO";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent extends HomeAdminComponent implements OnInit {

  users: User[] = [];
  showSuccessMessage: boolean = false;
  protected readonly top = top;

  constructor(private userService: UserService,private router:Router,private fb: FormBuilder) {
    super();
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['USER', Validators.required],
    });
  }


  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      (data) => {
        this.users = data;
        // Initialize filteredUsers with all users on component initialization
        this.filteredUsers = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  /* Filter and pagination Code :*/

  filteredUsers: User[] = [];

  itemsPerPage = 5;
  currentPage = 1;
  itemsPerPageOptions: number[] = [5, 10, 20,30,40,50,60,70,100];

  protected readonly Math = Math;
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;

    // Filter users based on the 'firstName' property
    this.filteredUsers = this.users.filter(user =>
      user.firstName.toLowerCase().includes(filterValue) ||
      user.lastName.toLowerCase().includes(filterValue) ||
      user.email.toLowerCase().includes(filterValue)
    );

    this.currentPage = 1;
  }

  updatePagination(): void {
    this.currentPage = 1; // Reset to the first page when changing items per page
    this.applyFilter({ target: { value: '' } } as unknown as Event);
  }

  /* End of Filter and pagination Code */

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(
      (data) => {
        console.log(data);
        this.getAllUsers();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteAllUsers() {
    this.userService.deleteAllUsers().subscribe(
      (data) => {
        this.getAllUsers();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateUser(userId: number) {
    this.router.navigate(['user/update', userId]);
  }



  /*-------------------Create User */

  visible: boolean = false;

  showDialog() {
    this.visible = true;
    this.showSuccessMessage = false;
  }

  userForm!: FormGroup;


createUser() {
  if (this.userForm.valid) {
    const newUser: createUserDTO = this.userForm.value;
    this.userService.createUser(newUser).subscribe(
      (createdUser: User) => {
        console.log('User created successfully:', createdUser);
        // Additional logic after user creation if needed
        this.visible = false; // Close the dialog after successful creation
        this.showSuccessMessage = true;
        this.getAllUsers();
      },
      (error) => {
        console.error('Error creating user:', error);
        // Handle errors if necessary
      }
    );
  }
}

    /*-------------------End of Create User */



}
