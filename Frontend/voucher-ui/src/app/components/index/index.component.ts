import { Component } from '@angular/core';
import {ApiService} from "../../services/api.service.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  voucherList: any;
  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.getAllVouchers();
  }
  // Get employees list
  getAllVouchers() {
    return this.apiService.getAllVouchers().subscribe((data: {}) => {
      this.voucherList = data;
    });
  }

  pageStart = 0;
  pageEnd = 0;


  nextData() {
    this.pageStart += 100;           // Get the next 100 records
  }

  prevData() {
    this.pageEnd -= 100;          // Get the previous 100 records
  }

}
