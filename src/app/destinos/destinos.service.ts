import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DestinosService {

  public apiDestino="http://carpool.test/api/destino"
  constructor() { }
  async getDestinos(){
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
    let res = await axios.get(this.apiDestino,config)
    return res;
}
//obtener un destino
async getDestino(destino_id:any){
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
  let res = await axios.get(this.apiDestino + "/"+ destino_id,config)
  return res;
}

async deleteAuto(destino_id:any){
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
  let res = await axios.delete(this.apiDestino + "/"+ destino_id,config)
  return res;
}
    
}
