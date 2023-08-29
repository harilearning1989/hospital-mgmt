import {Component, OnInit} from '@angular/core';
import {Appointment} from "../../../models/appointment";
import {AppointmentService} from "../../../services/appointment/appointment.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  appointmentsList: Appointment[];
  constructor(private appointmentService: AppointmentService) {

  }

  ngOnInit(): void {
    this.listAllAppointments();
  }

  private listAllAppointments() {
    this.appointmentService
      .listAllAppointments()
      .subscribe((response: any) => {
        this.appointmentsList = response.data;
        setTimeout(() => {
          $('#appointmentTable').DataTable({
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
