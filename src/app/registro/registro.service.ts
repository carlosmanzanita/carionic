import { Injectable } from '@angular/core';
import axios from 'axios';
import { Registro } from './registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  //Uri para registro de usuario
  private apiURI = "http://carpool.test/api/auth/registro";

  constructor() { }

  async registroUsuario(registro:Registro){
    //pertición http a la URI de laravel
    let res = await axios.post(this.apiURI, registro)
    return res;
  }
}
