import {Component, OnInit} from '@angular/core';
import {PatientService} from "../../../services/patient/patient.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  data: any = [];
  constructor(private patientService: PatientService) {

  }

  ngOnInit(): void {
    this.users();
  }
  users(): void {
    this.patientService
      .users()
      .subscribe((response: any) => {
        this.data = response;
        setTimeout(() => {
          $('#patientHistoryTable').DataTable({
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
