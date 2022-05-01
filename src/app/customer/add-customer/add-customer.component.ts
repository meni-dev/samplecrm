import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  isUserCreated: boolean = false;
  firstname: string = '';
  terms: boolean = false;
  customerType: string = '';
  description: string = '';
  addCustomer(formValue: NgForm) {
    console.log(formValue.value);

    const postBody = {
      title: formValue.value.firstname,
      body: formValue.value.description


    };
    this.usersService.adduser(postBody).subscribe(data => {
      this.isUserCreated = true;

      (err: any) => {
        console.log("Unable to Add User" + err);

      }
      console.log(data)
    })
    console.log(postBody);
    //this.usersService.adduser(data)
  }

  constructor(private usersService: UsersService) { }
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
