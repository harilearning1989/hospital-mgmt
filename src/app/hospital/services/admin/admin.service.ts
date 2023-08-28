import { Injectable } from '@angular/core';
import {Patient} from "../../models/patient";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Admin} from "../../models/admin";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private httpLink = {
    registerUrl: environment.apiUrl + 'admin' + '/register'
  }
  constructor(private http: HttpClient) { }
  register(admin: Admin) {
    return this.http.post(this.httpLink.registerUrl, admin);
  }
  users(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
