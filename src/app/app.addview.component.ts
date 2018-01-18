import { Component, OnInit   } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EmployeeMember } from './app.service';
import { Degreelist } from './app.select.service';
import { MyEmpDeg, Employeedet } from './app.member';
import { ValidateDep } from './app.validator';  /*Custom Validator service importing*/

@Component({
  selector: 'app-add',
  templateUrl: './app.add.html',
  /*template: `<h1>ADD</h1>`,*/
  styleUrls: ['./app.component.css']
})
export class AppAddComponent implements OnInit  {

  Firstname: string;
  Lastname: string;
  Department: string;
  Degree: MyEmpDeg[];
  EMPARRAY: FormGroup[];
  EMPDeg: MyEmpDeg[];
  len: number;
  myForm: FormGroup;

  constructor(private employeemember: EmployeeMember, private degreelist: Degreelist,
              private fb: FormBuilder) {}

  ngOnInit() {
   /* this.Firstname = 'FName';
    this.Lastname = 'LName';
    this.Department = 'De';
    this.EMPDeg  = this.degreelist.getTitle();*/
    this.EMPDeg = this.degreelist.getTitle();

    this.myForm = this.fb.group({
       'Firstname': ['Fname', [Validators.required, Validators.minLength(2), Validators.maxLength(15), Validators.pattern('^[a-zA-Z]*$')]],
       'Lastname': ['Lname', [Validators.required, Validators.minLength(1), Validators.maxLength(15), Validators.pattern('^[a-zA-Z]*$')]],
       'DOB': ['0000-00-00', [Validators.required]],
       /*ValidateDep is the Custom validate class imported and parameter is RegEx for validation.*/
       'Department': ['111', [Validators.required, ValidateDep(/[1-9][0-9]{2}/)]],
       'Degree': [this.EMPDeg, Validators.required],
      });
  }

  onSubmit(myForm) {
    if (myForm.valid) {

      this.employeemember.addEmpFunction(myForm.value);
    }
 }
}

@Component({
    selector: 'app-view',
    templateUrl: './app.view.html',
    styleUrls: ['./app.component.css']
  })
  export class AppViewComponent implements OnInit  {
   Firstname: string;
   Lastname: string;
   Department: string;
   Degree: MyEmpDeg[];
   EMPARRAY: FormGroup[];
   EMPDeg: MyEmpDeg[];
   len: number;
   myForm: FormGroup;

  constructor(private employeemember: EmployeeMember, private degreelist: Degreelist,
              private fb: FormBuilder) {}

  ngOnInit() {
    this.EMPARRAY  = this.employeemember.getEmpFunction();
    this.len = this.EMPARRAY.length;
  }
}

@Component({
  selector: 'app-notfound',
  template: `
  <h1 style="text-align: center"> Oops Page not found</h1>
  ` ,
  styleUrls: ['./app.component.css']
})
export class AppPageNotFoundComponent  {}
