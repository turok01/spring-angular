import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs";
import { catchError, retry } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})

export class HttpClientService {

  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    //return this.http.get('assets/employeeList.json')
    return this.http.get('http://localhost:8080/employees')
  }
}
