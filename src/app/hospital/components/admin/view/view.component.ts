import {Component, OnInit} from '@angular/core';
import {PatientService} from "../../../services/patient/patient.service";
import {AdminService} from "../../../services/admin/admin.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  data: any = [];
  constructor(private adminService: AdminService){

  }

  ngOnInit(): void {
    this.users();
  }

  users(): void {
    this.adminService
      .users()
      .subscribe((response: any) => {
        this.data = response;
        setTimeout(()=>{
          $('#patientDataTable').DataTable( {
            responsive: true,
            pagingType: 'full_numbers',
            pageLength: 5,
            processing: true,
            scrollCollapse: true,
            scrollY: '200px',
            lengthMenu : [5, 10, 25]
          } );
        }, 1);
      },error => console.error(error));
  }
}
