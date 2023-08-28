import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Doctor} from "../../models/doctor";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private httpLink = {
    registerUrl: environment.apiUrl + 'doctor' + '/register'
  }
  constructor(private http: HttpClient) { }

  register(doctor: Doctor) {
    return this.http.post(this.httpLink.registerUrl, doctor);
  }

  users(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
