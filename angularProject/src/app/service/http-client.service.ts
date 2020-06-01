import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs";
import { catchError, retry } from 'rxjs/operators';
import { Employee } from '../employee/employee';

@Injectable({ providedIn: 'root'})

export class HttpClientService {

  constructor(private http: HttpClient) { }
  //getData(): Observable<any> {
  getData(): Observable<any> {
    //return this.http.get<Employee[]>('assets/employees.json')
    return this.http.get('http://localhost:8080/employees')
  }
}
