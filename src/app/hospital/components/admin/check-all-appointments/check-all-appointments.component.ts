import {Component, OnInit} from '@angular/core';
import {PatientService} from "../../../services/patient/patient.service";

@Component({
  selector: 'app-check-all-appointments',
  templateUrl: './check-all-appointments.component.html',
  styleUrls: ['./check-all-appointments.component.scss']
})
export class CheckAllAppointmentsComponent implements OnInit {

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
          $('#checkAllAppointmentsTbl').DataTable( {
            responsive: true,
            pagingType: 'full_numbers',
            pageLength: 20,
            processing: true,
            scrollCollapse: true,
            scrollY: '550px',
            lengthMenu : [5, 10, 25]
          } );
        }, 1);
      },error => console.error(error));
  }

}
