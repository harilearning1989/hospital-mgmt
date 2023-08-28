import { Component } from '@angular/core';
import {PatientService} from "../../../services/patient/patient.service";
import {DoctorService} from "../../../services/doctor/doctor.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {

  data: any = [];

  constructor(private doctorService: DoctorService) {
  }

  ngOnInit(): void {
    this.users();
  }
  users(): void {
    this.doctorService
      .users()
      .subscribe((response: any) => {
        this.data = response;
        setTimeout(() => {
          $('#doctorHistoryTable').DataTable({
            responsive: true,
            pagingType: 'full_numbers',
            pageLength: 5,
            processing: true,
            scrollCollapse: true,
            scrollY: '200px',
            lengthMenu: [5, 10, 25]
          });
        }, 1);
      }, error => console.error(error));
  }
}
