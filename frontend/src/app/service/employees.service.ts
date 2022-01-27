import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empo } from '../employeee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
 url= 'http://localhost:1230/employees/';

  constructor(private http:HttpClient) {  }

  users(){
    return this.http.get(this.url);
  }

  saveUsers(data){
    return this.http.post(this.url,data)
  }

  delete_Employee(id){
    return this.http.delete(`${this.url}/${id}`)
  }

  updateEmp(data){
    return this.http.put(`${this.url}/${data._id}`, data)
  }
}
