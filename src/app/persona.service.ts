import { Injectable } from '@angular/core';
import { IPersona } from './persona';

@Injectable()
export class PersonaService {

  private persona: IPersona;

  //constructor() {
    //this.persona = new IPersona();
    //this.persona.nombre = "Isma";
  //}

  getPersona() {
    return this.persona;
  }

}
