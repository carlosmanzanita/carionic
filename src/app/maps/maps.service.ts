import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  
  private apiDestino = "http://carpool.test/api/destino";

  constructor() { }

  async getMaps(){
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

async getDestino(){
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
async guardarDestino(registroDestino:any, destino_id:any ){
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
  let res = await axios.put(this.apiDestino + "/" + destino_id, registroDestino,config)
  return res;
}

async deleteDestino(destino_id:any){
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
