import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  adduser(body: any) {

    return this.http.post('https://jsonplaceholder.typicode.com/posts', body);

  }

  getUsers() {
    const headers2 = new HttpHeaders({
      'content-type': 'application/json',
      'authendicationTocken': '1234565'
    });
    const params2 = new HttpParams()
      .set('pageNum', '10')
      .set('pageSize', '100');
    return this.http.get('https://jsonplaceholder.typicode.com/users', { headers: headers2, params: params2 });
    /*const users = [
      { userId: 10, userName: 'YouTube' },
      { userId: 20, userName: 'Facebook' }
    ]
    */
  }
}
