import { ApiService } from './api.service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import {baseUrl} from "../constants/constants";

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make HTTP GET request', () => {
    const mockData = [{ id: 1, name: 'voucher1' }, { id: 2, name: 'voucher2' }];
    service.getAllVouchers().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const request = httpMock.expectOne(`${baseUrl}/api/getVouchers`);
    expect(request.request.method).toBe('GET');
    request.flush(mockData);
  });

  it('should handle errors', () => {
    service.handleError('dummy error').subscribe(
      error => expect(error).toEqual('dummy error')
    );

  });

});
