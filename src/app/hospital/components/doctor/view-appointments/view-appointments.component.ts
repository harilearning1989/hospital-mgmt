import {Component, OnInit} from '@angular/core';
import {PatientService} from "../../../services/patient/patient.service";

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrls: ['./view-appointments.component.scss']
})
export class ViewAppointmentsComponent implements OnInit {

  data: any = [];
  constructor(private patientService: PatientService){

  }

  ngOnInit(): void {
    this.users();
  }

  users(): void {
    this.patientService
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
