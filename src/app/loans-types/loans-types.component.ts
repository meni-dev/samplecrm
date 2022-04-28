import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

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
      'LoanName': new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(20)

      ]),
      'LoanType': new FormControl('', Validators.required),
      'LoanDescription': new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(20)

      ]))
    })
    /*const newLoanObj = {
       'LoanName': 'My Loan Application',
       'LoanType': 'Personal Loan',
       'LoanDescription': 'This is Loan Application'
 
     } */
    //another way of setting values of forms
    // this.addLoanTypesForm.setValue(newLoanObj);
    //the only didderence is--> you donot have to pass all  "fields/keys"
    // this.addLoanTypesForm.patchValue(newLoanObj);
  }
  addLoanType() {
    //console.log(this.addLoanTypesForm.value)
    // console.log(this.addLoanTypesForm.get('LoanType')?.value);
    console.log(this.addLoanTypesForm.valid);
    console.log(this.addLoanTypesForm.invalid);
    console.log(this.addLoanTypesForm.pending);
    console.log(this.addLoanTypesForm.pristine);
    console.log(this.addLoanTypesForm.dirty);
    console.log(this.addLoanTypesForm.touched);
    console.log(this.addLoanTypesForm.untouched);









    this.addLoanTypesForm.valueChanges.subscribe(data => {
      console.log(data);
    });
  }
  resetForm() {
    this.addLoanTypesForm.reset();
  }

}














