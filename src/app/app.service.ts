import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  rootURL: string = 'https://jsonplaceholder.typicode.com/';
  userData = [];
  constructor(private http: HttpClient) {
    // this.http.get(this.rootURL + 'users').toPromise().then(data =>{
    //   console.log(data);

    // })
   }

  

  getUsers() {
     return this.http.get(this.rootURL + 'users')
  }

  getTodos(todo: any) {
    return this.http.get(this.rootURL + 'users/'+ todo+'/todos');
  }

  deleteTodos(todolist:any){
    return this.http.delete(this.rootURL + 'todos/'+ todolist);
  }

}
