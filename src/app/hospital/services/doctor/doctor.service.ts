import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Doctor} from "../../models/doctor";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private httpLink = {
    loginUrl: environment.apiUrl + 'login',
    registerUrl: environment.apiUrl + 'register',
    listAllDoctorsUrl: environment.apiUrl + 'doctor/list'
  }
  constructor(private http: HttpClient) { }

  register(doctor: Doctor) {
    return this.http.post(this.httpLink.registerUrl, doctor);
  }

  listAllDoctors(): Observable<Doctor> {
    return this.http.get(this.httpLink.listAllDoctorsUrl)
      .pipe(map(x => {
        return x;
      }));
  }
  users(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
