import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Appointment} from "../../models/appointment";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private httpLink = {
    listAllAppointmentsUrl: environment.apiUrl + 'appointment/list'
  }
  constructor(private http: HttpClient) { }

  listAllAppointments(): Observable<Appointment> {
    return this.http.get(this.httpLink.listAllAppointmentsUrl)
      .pipe(map(x => {
        return x;
      }));
  }
}
