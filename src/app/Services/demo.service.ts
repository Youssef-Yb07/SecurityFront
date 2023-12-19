import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DemoService {


  private BaseUrl = 'http://localhost:8080/api/v1/demo-controller';
  constructor(private http: HttpClient) {}

  getDemoData(): Observable<string> {
    return this.http.get(this.BaseUrl, {responseType: 'text' });
  }
}
