import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.updateUser();
  }

}
