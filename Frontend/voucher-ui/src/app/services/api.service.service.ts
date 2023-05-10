import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import { baseUrl } from '../constants/constants';
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  voucherUrl = '/api/getVouchers';

  constructor(private httpClient: HttpClient) {
  }

  getAllVouchers() {
    return this.httpClient
      .get( baseUrl+this.voucherUrl)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\n Message: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
