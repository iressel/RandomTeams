import { Component, OnInit } from '@angular/core';
import { IPersona } from '../../persona';
import { NgModel, NgForm, FormsModule } from '@angular/forms';

@Component({
  moduleId:module.id,
  selector: 'app-body',
  templateUrl:'body.component.html'
})

export class BodyComponent
{

  public mostrar:boolean = false;
  public text1:string;
  public text2:string;
  public jugadores: Array<IPersona>;
  public team1: Array<IPersona>;
  public team2: Array<IPersona>;  
  
  constructor() 
  {
    var vm = this;
    vm.jugadores = [];
    vm.team1 = [];
    vm.team2 = [];
    vm.text1 = "Equipo 1";
    vm.text2 = "Equipo 2";
  }
  
  addPlayer(nombre:any)
  {
    let jugador = new IPersona(nombre.value);
    this.jugadores.push(jugador);
    nombre.value="";
    localStorage.setItem("jugador",JSON.stringify(jugador));
  }

  removePlayer(jugador:IPersona)
  {
    let index = this.jugadores.indexOf(jugador);
    this.jugadores.splice(index,1);
  }

  setRandom(Jugadores: Array<IPersona>,Team1: Array<IPersona>,Team2: Array<IPersona>, longi:number)
  {
    Jugadores = this.jugadores;
    this.team1 = [];
    this.team2 = [];
    Team1 = this.team1;
    Team2 = this.team2;
    longi = this.jugadores.length;

    var currentIndex = longi, temporaryValue, randomIndex ;
    
    // While there remain elements to shuffle...
    while (0 !== currentIndex) 
    {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    
    // And swap it with the current element.
    temporaryValue = Jugadores[currentIndex];
    Jugadores[currentIndex] = Jugadores[randomIndex];
    Jugadores[randomIndex] = temporaryValue;
    }

    for (var j=0; j< Jugadores.length; j++) 
    {
      if(j < (Jugadores.length/2))
        {
          Team1.push(Jugadores[j]);
        }
        else
        {
          Team2.push(Jugadores[j]);
        }
    }
    
  }

}
