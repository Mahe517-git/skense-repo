import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  saveNewUser(payload:any){
   return this.httpClient.post('http://localhost:3000/signup',payload)
  }

  changePassword(payload:any){
    return this.httpClient.put(`http://localhost:3000/signup/${payload.id}`,payload)
  
  }

  getUserById(id:any){
    return this.httpClient.get(`http://localhost:3000/signup/${id}`)
  }
}
