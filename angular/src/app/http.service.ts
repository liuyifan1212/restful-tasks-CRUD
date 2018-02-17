import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
    this.getOne();
   }

  getTasks(){
    let tempObservable = this._http.get('/tasks');
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
 }
  getOne(){
    let tempObservable = this._http.get('/tasks/5a84e9f75534fefbed1b1caf');
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }








}
