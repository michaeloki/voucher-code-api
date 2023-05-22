import {AfterContentInit, AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {ApiService} from "../../services/api.service.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-vouchers',
  templateUrl: './vouchers.component.html',
  styleUrls: ['./vouchers.component.css']
})
export class VouchersComponent implements AfterContentInit, AfterViewInit {

  @ViewChild('voucherQuantity') voucherQuantityElement: ElementRef;

  voucherList:Array<string> = [];
  pageNumber: number = 1;
  favoriteVoucherType: string = "Simple";
  voucherTypes: string[] = ['Simple', 'Complex'];
  buttonState = false;
  voucherTextChange = 0;

  voucherForm = new FormGroup({
    voucherQuantity: new FormControl(),
  });

  constructor(private apiService: ApiService, voucherQuantityElement: ElementRef) {
    this.voucherQuantityElement=voucherQuantityElement;
  }

  ngAfterContentInit() {
    let vouchers = this.voucherForm.controls.voucherQuantity.value;
    if(!this.buttonState && vouchers>0) {
      this.getAllVouchers("Simple",vouchers);
    }
  }

  ngAfterViewInit() {
    this.voucherTextChange = this.voucherQuantityElement.nativeElement.value;
  }

  getAllVouchers(favoriteVoucherType: string, quantity: number) {
    return this.apiService.getAllVouchers(favoriteVoucherType, quantity).subscribe((data) => {
      this.voucherList = JSON.parse(JSON.stringify(data));
    });
  }

  onItemChange(value: string){
    let quantity = this.voucherForm.controls.voucherQuantity.value;
    if(quantity > 0) {
      this.getAllVouchers(value,quantity);
    }
  }

  onInputChange() {
    this.voucherTextChange = this.voucherQuantityElement.nativeElement.value;
    this.onItemChange(this.voucherTextChange.toString());
  }
}
