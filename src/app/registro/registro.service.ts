import { Injectable } from '@angular/core';
import axios from 'axios';
import { Registro } from './registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private ip = localStorage.getItem('ip') //poner en todos los services

  //Uri para registro de usuario
  private apiURI = `http://${this.ip}/api/auth/registro`;
  private apiVer = `http://${this.ip}/api/auth/ver-sesion`;

  constructor() { }

  async registroUsuario(registro:Registro){
    //pertición http a la URI de laravel
    let res = await axios.post(this.apiURI, registro)
    return res;
  }

  async verSiSesion(){
    // obtenemos el token de localStorage
    const token = localStorage.getItem('token')
    // asignamos el token a la validacion para comprobar si existe una sesion
    const config = {
      headers:{
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+token 
      }
    }
    //pertición http a la URI de laravel
    let res = await axios.get(this.apiVer,config)
    return res;
  }
}
