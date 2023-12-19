import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../Classes/user";
import {Observable} from "rxjs";
import {createUserDTO} from "../Classes/createUserDTO";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BaseUrl = "http://localhost:8080/api/v1/users";

  constructor(private httpClient:HttpClient) { }

  createUser(user: createUserDTO): Observable<User> {
    return this.httpClient.post<User>(this.BaseUrl+'/create', user);
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(this.BaseUrl+'/get/by/id/'+id);
  }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.BaseUrl+'/get/all')
  }
  updateUser(id:number,user: User): Observable<User> {
    return this.httpClient.put<User>(this.BaseUrl+'/update/'+id, user);
  }

  deleteUser(id:number):Observable<User> {
   return this.httpClient.delete<User>(this.BaseUrl+'/delete/'+id);
  }

  deleteAllUsers(): Observable<User[]> {
    return this.httpClient.delete<User[]>(this.BaseUrl+'/delete/all');
  }

}
