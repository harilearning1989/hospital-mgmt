import {Component, OnInit} from '@angular/core';
import {DoctorService} from "../../../services/doctor/doctor.service";
import {Doctor} from "../../../models/doctor";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  doctorsList: Doctor[];
  displayStyle = "none";
  constructor(private doctorService: DoctorService){

  }

  ngOnInit(): void {
    this.listAllDoctors();
  }

  listAllDoctors(): void {
    this.doctorService
      .listAllDoctors()
      .subscribe((response: any) => {
        this.doctorsList = response.data;
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

  showPatientHistoryOpenPopUp(d: Doctor) {
    this.displayStyle = "block";
  }
  showPatientHistoryClosePopup() {
    this.displayStyle = "none";
  }

}
