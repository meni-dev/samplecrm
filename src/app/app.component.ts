import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simplecrm';
  success_msg = true;

  superPower = 'superwomen';//string

  tax = 10;
  styleprop = "pink";
  txtcolor = 'yellow';
  contacts = [{
    'firstname': 'meni',
    'lastname': "menaga",
    'id': 1234
  },

  {
    'firstname': 'saran',
    'lastname': 'saravanan',
    'id': 1190

  },
  {
    'firstname': "tamil",
    'lastname': "tamilselvan",
    'id': 3466

  },
  {
    'firstname': 'saran',
    'lastname': 'saravanan',
    'id': 1190

  },
  {
    'firstname': "tamil",
    'lastname': "tamilselvan",
    'id': 3466

  }
  ]
}
