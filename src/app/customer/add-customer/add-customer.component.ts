import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  firstname: string = '';
  terms: boolean = false;
  customerType: string = '';
  description: string = '';
  addCustomer(formValue: NgForm) {
    console.log(formValue.value);
  }

  constructor() { }
  resetForm(formValue: NgForm) {
    formValue.reset();
  }

  ngOnInit(): void {

  }
  loadValues(formValue: NgForm) {
    let userdetails = {
      firstname: 'Saran',
      terms: true,
      customerType: 2,
      description: ' '

    }
    formValue.setValue(userdetails)
  }




}
