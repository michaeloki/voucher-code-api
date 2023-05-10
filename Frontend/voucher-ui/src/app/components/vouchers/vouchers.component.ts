import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service.service";

@Component({
  selector: 'app-vouchers',
  templateUrl: './vouchers.component.html',
  styleUrls: ['./vouchers.component.css']
})
export class VouchersComponent implements OnInit {

  voucherList: any;
  showButtons = false;

  constructor(private apiService: ApiService) {
  }
  ngOnInit() {
    this.getAllVouchers();
  }
  getAllVouchers() {
    return this.apiService.getAllVouchers().subscribe((data: {}) => {
      this.voucherList = data;
      this.showButtons = true;
    });
  }

  pageStart = 0;
  pageEnd = 0;


  nextPage() {
    this.pageStart += 100;
  }

  prevPage() {
    this.pageEnd -= 100;
  }
}
