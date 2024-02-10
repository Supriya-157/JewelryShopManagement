import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = 'http://localhost:44346';
@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any> {
    return this.http.get(API_URL + '/api/' + "Category").pipe(map(res => res));
  }

  public getById(id:any): Observable<any> {
    return this.http.get(API_URL + '/api/' + "Category/" + id);
  }
  }
// /api/users