import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttppostService {
  postData: any;

  constructor(private http:HttpClient) { }

  createuser(users:{firstname:string,lastname:string,email:string,password:string}){
    this.http.post('https://test1-56251-default-rtdb.firebaseio.com/users.json',users)
    .subscribe((res)=>{
      console.log(res);
    })
  }
}
