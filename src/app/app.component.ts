import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simplecrm';
  page_heading = "Learning in Angular Interpolation"; //string
  page_count = 20; //integer
  user_object = { 'firstname': 'meni', 'lastname': 'menaga' } //object
  isUserLoggedIn = true;

  imgurl = 'test.png';
  imgalt = 'this is missing image text';


  success_msg = true;

  superPower = 'superwomen';//string
  tax = 10;
  styleClsProp = 'c3';
  styleprop = "pink";
  txtcolor = 'blue';
  conditionClassProp = 'c4';
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
