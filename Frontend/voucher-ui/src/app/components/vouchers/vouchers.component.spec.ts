import { TestBed } from '@angular/core/testing';
import { VouchersComponent } from './vouchers.component';
import { ApiService } from '../../services/api.service.service';
import { NgxPaginationModule } from 'ngx-pagination';
import {HttpClientModule} from "@angular/common/http";

describe('VouchersComponent', () => {
  let component: VouchersComponent;
  let apiService: ApiService ;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VouchersComponent],
      providers: [{ provide: {ApiService, NgxPaginationModule, HttpClientModule}, useValue: apiService }],
    }).compileComponents();
  });


  it('should create', () => {
    expect(component).toBeUndefined();
  });
});
