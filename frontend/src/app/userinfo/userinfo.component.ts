import { Component, OnInit } from '@angular/core';
// import {AuthService} from '../../services/auth.service'
import { EmployeesService } from '../service/employees.service';
import {Router} from '@angular/router'
import { FormGroup, NgForm } from '@angular/forms';
import { Empo } from '../employeee.model';


@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  
  employee: any;
  employeeName:  string;
  employeeAge: string;
  employeeAddress: string;
  message:string
   
  constructor(public userData:EmployeesService, private router:Router) { 
    
  }
  ngOnInit(): void {
    this.userData.users().subscribe((Data)=>{
      this.employee=Data
    })
  }
   
    // ngOnInit(){
    //   this.userData.users().subscribe(data =>{
    //     this.employee = data.map(e =>{
    //       return {
    //         id: e.payload.doc.id,
    //         isedit: false,
    //         name: e.payload.doc.data()['name'],
    //         email: e.payload.doc.data()['email'],
    //         address: e.payload.doc.data()['address'],
    //       };
    //     })
    //     console.log(this.employee);
    //   });
    // }

    CreateRecord(){
      let Record = {}
    Record['name']=this.employeeName
    Record['email']=this.employeeAge
    Record['address']=this.employeeAddress
    alert("Do you want to save data?") 
     
     this.userData.saveUsers(Record).subscribe(res => {
         this.employeeName=""
         this.employeeAge=""
         this.employeeAddress=""
        console.log(res)
        
       
     })

     }

    EditRecord(Record){
      Record.isedit = true;
      Record.editname=Record.name;
      Record.editage=Record.email;
      Record.editaddress=Record.address;


    }

    UpdateRecord(recorddata){
      let record ={};
      record['name']=recorddata.editname;
      record['email']=recorddata.editage;
      record['address']=recorddata.editaddress;
      this.userData.updateEmp(recorddata._id);
      recorddata.isedit=false;
    }

    DeleteRecord(record_id){
      alert("Do you want to delete data?")
      this.userData.delete_Employee(record_id).subscribe((res)=>{
          console.log(res);
      },
      (err)=>{
        console.log(err);
      }
      );
    }

}
