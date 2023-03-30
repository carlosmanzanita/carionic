import { Injectable } from '@angular/core';
import axios from 'axios';
import { InicioSesion } from './inicio-sesion';

@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {

  // URI para iniciar sesión
  private apiURI = "http://carpool.test/api/auth/iniciar-sesion";
  private apiVer = "http://carpool.test/api/auth/ver-sesion";
  
  constructor() { }

  async iniciosesionUsuario(inicioSesion:InicioSesion){
    //pertición http a la URI de laravel
    let res = await axios.post(this.apiURI, inicioSesion)
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
