import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
    //this.getTasks();
    //this.getOne();
    this.getPokemon();
    this.a();
    this.b();
   }

  getTasks(){
    let tempObservable = this._http.get('/tasks');
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
 }
  getOne(){
    let tempObservable = this._http.get('/tasks/5a84e9f75534fefbed1b1caf');
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }
  getPokemon(){
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    bulbasaur.subscribe(data => console.log("Bulbasaur's abilities are ",data.abilities[0].ability.name,"and",data.abilities[1].ability.name ));
    
  }
  a(){
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/ability/65/');
    bulbasaur.subscribe(data => console.log(data.pokemon.length+" Pokemon have the overgrow ability!" ));
  }
  b(){
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/ability/65/');
    bulbasaur.subscribe(function(data){
      for(var i in data.pokemon){
        console.log(data.pokemon[i].pokemon.name )
      }
    });
  }

}

