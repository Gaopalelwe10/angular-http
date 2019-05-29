import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class KeyserviceService {

  constructor(private http: HttpClient) { }

  getNews(){
      return this.http.get("http://jsonplaceholder.typicode.com/users")
  }
  
}
