import { TestBed } from '@angular/core/testing';
import { VouchersComponent } from './vouchers.component';
import { ApiService } from '../../services/api.service.service';
import { Observable, of } from 'rxjs';

describe('VouchersComponent', () => {
  let component: VouchersComponent;
  let apiService: ApiService;

  beforeEach(async () => {
    apiService = jasmine.createSpyObj('ApiService', ['getAllVouchers']);
    await TestBed.configureTestingModule({
      declarations: [VouchersComponent],
      providers: [{ provide: ApiService, useValue: apiService }],
    }).compileComponents();
  });

  beforeEach(() => {
    const mockVouchers = [{ id: 1, name: 'Voucher 1' }, { id: 2, name: 'Voucher 2' }];
    apiService.getAllVouchers.and.returnValue(of(mockVouchers));

    const fixture = TestBed.createComponent(VouchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAllVouchers on init', () => {
    spyOn(component, 'getAllVouchers');
    component.ngOnInit();
    expect(component.getAllVouchers).toHaveBeenCalled();
  });

  it('should set voucherList on getAllVouchers', () => {
    component.getAllVouchers();
    expect(component.voucherList).toEqual([{ id: 1, name: 'Voucher 1' }, { id: 2, name: 'Voucher 2' }]);
  });
});