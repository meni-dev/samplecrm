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
    this.addLoanTypesForm = this.fb.group({
      'LoanName': new FormControl(),
      'LoanType': new FormControl()
    })
  }
  addLoanType() {
    console.log(this.addLoanTypesForm.value)
  }

}
