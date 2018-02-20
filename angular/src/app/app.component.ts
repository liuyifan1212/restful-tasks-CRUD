import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MEAN';
  data : [string];
  d: [string];
  newTask: any;
  newTask2: any;
  

  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.getTaskFromService()
    this.newTask = { title: "", description: "" }
  }
  onSubmit(){
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log("Got data from back", data);
      this.newTask = {title: '',description:''}
      this.getTaskFromService()
    })
  }
  updateSubmit(){
      let id = this.newTask2['id'];
      this._httpService.updateTask(id,this.newTask2).subscribe(data=>{
        console.log(data);
        this.newTask2={title:"",description:""}
        this.newTask2 = null
        this.getTaskFromService()
      })

  }
  deleteTask(id){
    this._httpService.removeTask(id).subscribe(data=>{
      console.log(data)
      this.data = data['data'];
      this.getTaskFromService()
    });    
  }
  updateTask(i){
    this.newTask2 = {id:i._id,title:i.title,description:i.description}
   
  }


  getTaskFromService(){
    let observable = this._httpService.getTasks()
    observable.subscribe(data =>{
      //console.log("Congrats!got your data!", data)
      this.data = data['data'];
      
    })
  }
}

