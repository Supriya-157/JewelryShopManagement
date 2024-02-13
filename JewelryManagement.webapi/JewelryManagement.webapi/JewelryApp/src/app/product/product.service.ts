import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = 'http://localhost:44346';
@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any> {
    return this.http.get(API_URL + '/api/' + "Product").pipe(map(res => res));
  }

  
  }
// /api/users