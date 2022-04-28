import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-loans-types',
  templateUrl: './loans-types.component.html',
  styleUrls: ['./loans-types.component.scss']
})
export class LoansTypesComponent implements OnInit {
  addLoanTypesForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.addLoanTypesForm = new FormGroup({

    //   'LoanName': new FormControl(),
    //   'LoanType': new FormControl(),
    //   'LoanDescription': new FormControl()

    // })
    /* this.addLoanTypesForm = this.fb.group({
       'LoanName': new FormControl('Saran Loan'),
       'LoanType': new FormControl('PersonalLoan'),
       'LoanDescription': new FormControl('This is for laptop')
     })*/
    this.addLoanTypesForm = this.fb.group({
      'LoanName': new FormControl(),
      'LoanType': new FormControl(),
      'LoanDescription': new FormControl()
    })
    const newLoanObj = {
      'LoanName': 'My Loan Application',
      'LoanType': 'Personal Loan',
      'LoanDescription': 'This is Loan Application'

    }
    //another way of setting values of forms
    this.addLoanTypesForm.setValue(newLoanObj);
    //the only didderence is--> you donot have to pass all  "fields/keys"
    // this.addLoanTypesForm.patchValue(newLoanObj);
  }
  addLoanType() {
    //console.log(this.addLoanTypesForm.value)
    // console.log(this.addLoanTypesForm.get('LoanType')?.value);
    this.addLoanTypesForm.valueChanges.subscribe(data => {
      console.log(data);
    });
  }

}
