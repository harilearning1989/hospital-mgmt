import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Admin} from "../../models/admin";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private httpLink = {
    registerUrl: environment.apiUrl + 'admin/register',
    listAllAdminDetailsUrl: environment.apiUrl + 'admin/list'
  }
  constructor(private http: HttpClient) { }
  register(admin: Admin) {
    return this.http.post(this.httpLink.registerUrl, admin);
  }
  listAllAdminDetails(): Observable<Admin>{
    return this.http.get(this.httpLink.listAllAdminDetailsUrl)
      .pipe(map(x => {
        return x;
      }));
  }
}
