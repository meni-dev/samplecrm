import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  deleteUser(id: any) {
    return this.http.delete('https://jsonplaceholder.typicode.com/users/' + id);
  }
  updateUser() {


    const putheaders = new HttpHeaders({
      'content-yupe': 'application/json',
      'authendicationTocken': '5567888',
      'userId': 'testinguser'
    })



    const putBody = {
      name: 'ARC TUTORIAL',
      userId: 1
    };
    return this.http.put('https://jsonplaceholder.typicode.com/users/1', putBody, { headers: putheaders }).subscribe(data => {
      console.log(data);
      (err: any) => {
        console.log(err);
      }
    })

  }

  //POST method
  adduser(body: any) {

    //return this.http.post('https://jsonplaceholder.typicode.com/posts', body);
    return this.http.post('https://fakestoreapi.com/products', body);

  }

  getUsers() {
    const headers2 = new HttpHeaders({
      'content-type': 'application/json',
      'authendicationTocken': '1234565'
    });
    const params2 = new HttpParams()
      .set('pageNum', '10')
      .set('pageSize', '100');
    //return this.http.get('https://jsonplaceholder.typicode.com/users', { headers: headers2, params: params2 });

    return this.http.get('\
    ', { headers: headers2, params: params2 });
    /*const users = [
      { userId: 10, userName: 'YouTube' },
      { userId: 20, userName: 'Facebook' }
    ]
    */
  }
}
