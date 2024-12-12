import {Component, inject, OnInit} from '@angular/core';
import {MasterService} from '../../services/master.service';
import {APIResponseModel, IDesignation} from '../../model/interface/role';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {
  designationList: IDesignation[] = []

  masterService = inject(MasterService);


  ngOnInit(): void {
    this.getAllDesignations();
  }

  getAllDesignations(): void {
    this.masterService.getAllDesignations().subscribe((result: APIResponseModel) => {
      this.designationList = result.data
    }, error => {
      alert("API Error / Network Down");
    })
  }
}
