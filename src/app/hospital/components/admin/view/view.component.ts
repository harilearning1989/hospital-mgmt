import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../../services/admin/admin.service";
import {Admin} from "../../../models/admin";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  adminList: Admin[];
  constructor(private adminService: AdminService){

  }

  ngOnInit(): void {
    this.listAllAdminDetails();
  }

  listAllAdminDetails(): void {
    this.adminService
      .listAllAdminDetails()
      .subscribe((response: any) => {
        this.adminList = response.data;
        setTimeout(()=>{
          $('#patientDataTable').DataTable( {
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
