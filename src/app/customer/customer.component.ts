import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  users: any;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    const users = this.usersService.getUsers().subscribe(data => {
      console.log('data' + JSON.stringify(data))
      this.users = data
    });
  }

}
