import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service.service";

@Component({
  selector: 'app-vouchers',
  templateUrl: './vouchers.component.html',
  styleUrls: ['./vouchers.component.css']
})
export class VouchersComponent implements OnInit {

  voucherList: any;
  pageNumber: number = 1;

  constructor(private apiService: ApiService) {
  }
  ngOnInit() {
    this.getAllVouchers();
  }
  getAllVouchers() {
    return this.apiService.getAllVouchers().subscribe((data: {}) => {
      this.voucherList = data;
    });
  }
}
