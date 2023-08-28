import {Component, OnInit, ViewChild} from '@angular/core';
import {PatientService} from "../../../services/patient/patient.service";
import {HttpClient} from "@angular/common/http";
import {PatientHistory} from "../../../models/patient-history";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  data: any = [];
  form: PatientHistory = new PatientHistory();
  isSuccessful = false;
  displayStyle = "none";
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
          $('#patientDataTable').DataTable({
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


  showPatientHistoryOpenPopUp(book: PatientHistory) {
    this.isSuccessful = false;
    this.form = book;
    this.displayStyle = "block";
  }
  showPatientHistoryClosePopup() {
    this.displayStyle = "none";
  }
}
