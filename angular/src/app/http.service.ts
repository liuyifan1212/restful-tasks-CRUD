import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
    //this.getTasks();
    //this.getOne();
   }

  getTasks(){
    //let tempObservable = this._http.get('/tasks');
    //tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('/tasks')
  }
  addTask(newtask){
    return this._http.post('/tasks', newtask)
  }
  removeTask(id){
    return this._http.delete('/tasks/'+id);
  }
  updateTask(id,newTask2){
    return this._http.put('/tasks/'+id,newTask2);
  }
}
