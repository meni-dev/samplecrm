import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loans-types',
  templateUrl: './loans-types.component.html',
  styleUrls: ['./loans-types.component.scss']
})
export class LoansTypesComponent implements OnInit {
  addLoanTypesForm!: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.addLoanTypesForm = new FormGroup({

      'LoanName': new FormControl(),
      'LoanType': new FormControl(),
      'LoanDescription': new FormControl()

    })
  }
  addLoanType() {
    console.log(this.addLoanTypesForm.value)
  }

}
