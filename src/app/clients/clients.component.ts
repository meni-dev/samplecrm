import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clientlist = [
    { clientId: 1, firstname: 'raj', lastname: 'kumar' },
    { clientId: 2, firstname: 'saran', lastname: 'raj' },
    { clientId: 3, firstname: 'tamil', lastname: 'selvan' },
    { clientId: 4, firstname: 'meni', lastname: 'menaga' },
    { clientId: 5, firstname: 'saravana', lastname: 'kumaran' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
