import { Injectable } from '@angular/core';
import axios from 'axios';
import { Destino } from './destino';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  private ip = localStorage.getItem('ip')

  private apiDestino = `http://${this.ip}/api/destino`;

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

async guardarDestino(destino:Destino ){
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
  let res = await axios.post(this.apiDestino, destino,config)
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
