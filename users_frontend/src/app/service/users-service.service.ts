import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UsersServiceService{

  private urlAPI = 'http://localhost:8010/api';
  constructor(private http: HttpClient) { 
  }

  getAllUsers(): Observable<any>{
    return this.http.get<any>(this.urlAPI + '/users');
  }
  
  createUser(data: any): Observable<any> {
    console.log(this.urlAPI)
    return this.http.post(this.urlAPI + '/create', data)
  }

  updateUser(data: any, id: string): Observable<any> {
    return this.http.put(`${this.urlAPI}/update/${id}`, data)
  }

  deleteUser(id:string): Observable<any>{
    return this.http.delete(`${this.urlAPI}/delete/${id}`)
  }
}
