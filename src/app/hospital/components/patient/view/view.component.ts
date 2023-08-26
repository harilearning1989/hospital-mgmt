import {Component, OnDestroy, OnInit} from '@angular/core';
import DataTables from 'datatables.net';
import {Subject} from "rxjs";
import {PatientService} from "../../../services/patient/patient.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  allUsers: any = [];
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.users();
  }

  users(): void {
    this.patientService
      .users()
      .subscribe((response: any) => {
        this.allUsers = response.data;
      });
  }

}
