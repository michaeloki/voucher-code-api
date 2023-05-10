import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import { baseUrl } from '../constants/constants';
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  voucherUrl = '/getVouchers';

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
      // Get client-side error
      errorMessage = error.error.message;
      console.log('see error ', errorMessage);
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
